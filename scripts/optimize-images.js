const sharp = require('sharp')
const fs = require('fs').promises
const path = require('path')

// Optimization tiers based on image usage
const TIERS = {
  hero: {
    name: 'Hero Images (Premium Quality)',
    maxWidth: 2560,
    quality: 90,
    patterns: [
      'who-i-am.jpg',
      'leading-from-the-front.jpg',
      'stop-doing-start-being.jpg',
      'contact-hero.jpg',
      'features/technical-leader.jpg',
      'features/courageous.jpg',
      'features/values-driven.jpg',
    ],
  },
  gallery: {
    name: 'Gallery Images (High Quality)',
    maxWidth: 1920,
    quality: 85,
    patterns: ['travel/', 'about-facts/'],
  },
  testimonials: {
    name: 'Testimonials (Optimized)',
    maxWidth: 400,
    quality: 82,
    patterns: ['testimonials/'],
  },
}

// Determine which tier an image belongs to
function getTierForImage(imagePath) {
  const relativePath = imagePath.replace(/^.*public\/images\//, '')

  // Check hero images (exact matches)
  if (TIERS.hero.patterns.some((pattern) => relativePath.includes(pattern))) {
    return TIERS.hero
  }

  // Check gallery images (directory matches)
  if (TIERS.gallery.patterns.some((pattern) => relativePath.includes(pattern))) {
    return TIERS.gallery
  }

  // Check testimonials (directory matches)
  if (TIERS.testimonials.patterns.some((pattern) => relativePath.includes(pattern))) {
    return TIERS.testimonials
  }

  // Default to gallery tier for any unmatched images
  return TIERS.gallery
}

async function optimizeImage(inputPath) {
  const tier = getTierForImage(inputPath)
  const ext = path.extname(inputPath)
  const outputPath = inputPath.replace(ext, '.webp')

  try {
    const metadata = await sharp(inputPath).metadata()
    const originalSize = (await fs.stat(inputPath)).size

    // Resize if image is wider than max width
    // Use rotate() to auto-orient based on EXIF data
    let pipeline = sharp(inputPath).rotate()

    if (metadata.width > tier.maxWidth) {
      pipeline = pipeline.resize(tier.maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
    }

    // Convert to WebP with tier-specific quality
    await pipeline.webp({ quality: tier.quality }).toFile(outputPath)

    const newSize = (await fs.stat(outputPath)).size
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1)

    console.log(
      `✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB, -${savings}%)`
    )

    // Delete original file
    await fs.unlink(inputPath)

    return { original: originalSize, optimized: newSize }
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message)
    return null
  }
}

// Recursively find all image files
async function findImageFiles(dir, fileList = []) {
  const files = await fs.readdir(dir, { withFileTypes: true })

  for (const file of files) {
    const filePath = path.join(dir, file.name)
    if (file.isDirectory()) {
      await findImageFiles(filePath, fileList)
    } else if (/\.(jpg|jpeg)$/i.test(file.name)) {
      fileList.push(filePath)
    }
  }

  return fileList
}

async function main() {
  console.log('🎨 Starting image optimization...\n')

  const imageDir = path.join(__dirname, '../public/images')

  // Find all JPG and JPEG files
  const imageFiles = await findImageFiles(imageDir)

  console.log(`Found ${imageFiles.length} images to optimize\n`)

  let totalOriginal = 0
  let totalOptimized = 0
  let processedCount = 0

  // Process images by tier for better organization
  for (const [tierName, tierConfig] of Object.entries(TIERS)) {
    const tierImages = imageFiles.filter((img) => getTierForImage(img) === tierConfig)

    if (tierImages.length === 0) continue

    console.log(`\n📸 ${tierConfig.name} (${tierImages.length} images)`)
    console.log(`   Max width: ${tierConfig.maxWidth}px | Quality: ${tierConfig.quality}`)
    console.log('   ' + '-'.repeat(70))

    for (const imagePath of tierImages) {
      const result = await optimizeImage(imagePath)
      if (result) {
        totalOriginal += result.original
        totalOptimized += result.optimized
        processedCount++
      }
    }
  }

  // Print summary
  const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1)
  console.log('\n' + '='.repeat(80))
  console.log('✨ Optimization Complete!')
  console.log('='.repeat(80))
  console.log(`📊 Total processed: ${processedCount} images`)
  console.log(
    `💾 Original size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB → ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`
  )
  console.log(`🎉 Total savings: ${totalSavings}% (${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)}MB)`)
  console.log('')
}

main().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})

