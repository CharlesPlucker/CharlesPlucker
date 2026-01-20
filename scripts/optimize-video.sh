#!/bin/bash

# Video optimization script for hero background
# Uses H.265 (HEVC) codec for better compression while maintaining quality

set -e

echo "🎬 Starting video optimization..."
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ Error: ffmpeg is not installed"
    echo ""
    echo "To install ffmpeg on macOS:"
    echo "  brew install ffmpeg"
    echo ""
    echo "To install on Linux:"
    echo "  sudo apt-get install ffmpeg  # Debian/Ubuntu"
    echo "  sudo yum install ffmpeg      # RedHat/CentOS"
    echo ""
    exit 1
fi

# Video paths
VIDEO_DIR="$(dirname "$0")/../public/videos"
INPUT_VIDEO="$VIDEO_DIR/background.mp4"
OUTPUT_VIDEO="$VIDEO_DIR/background-optimized.mp4"
BACKUP_VIDEO="$VIDEO_DIR/background-original.mp4"

# Check if input video exists
if [ ! -f "$INPUT_VIDEO" ]; then
    echo "❌ Error: Video file not found at $INPUT_VIDEO"
    exit 1
fi

# Get original file size
ORIGINAL_SIZE=$(du -h "$INPUT_VIDEO" | cut -f1)

echo "📹 Input video: background.mp4"
echo "📊 Original size: $ORIGINAL_SIZE"
echo ""
echo "⚙️  Encoding with H.264..."
echo "   Codec: libx264"
echo "   CRF: 23 (high quality)"
echo "   Preset: slow (better compression)"
echo "   Profile: high (best compatibility)"
echo ""

# Run ffmpeg optimization
# -c:v libx264: Use H.264 codec (universal browser support)
# -crf 23: Constant Rate Factor (lower = better quality, 23 is high quality)
# -preset slow: Slower encoding for better compression
# -profile:v high: High profile for best quality/compression balance
# -pix_fmt yuv420p: Ensures compatibility with all browsers
# -an: No audio (remove audio track)
# -movflags +faststart: Optimize for web streaming
ffmpeg -i "$INPUT_VIDEO" \
  -c:v libx264 \
  -crf 23 \
  -preset slow \
  -profile:v high \
  -pix_fmt yuv420p \
  -an \
  -movflags +faststart \
  -y \
  "$OUTPUT_VIDEO" 2>&1 | grep -E "Duration|frame=|video:" || true

echo ""

# Check if output was created successfully
if [ ! -f "$OUTPUT_VIDEO" ]; then
    echo "❌ Error: Optimization failed"
    exit 1
fi

# Get new file size
NEW_SIZE=$(du -h "$OUTPUT_VIDEO" | cut -f1)

# Calculate savings (approximate)
ORIGINAL_BYTES=$(stat -f%z "$INPUT_VIDEO" 2>/dev/null || stat -c%s "$INPUT_VIDEO" 2>/dev/null)
NEW_BYTES=$(stat -f%z "$OUTPUT_VIDEO" 2>/dev/null || stat -c%s "$OUTPUT_VIDEO" 2>/dev/null)
SAVINGS=$(echo "scale=1; (1 - $NEW_BYTES / $ORIGINAL_BYTES) * 100" | bc)

echo "✅ Optimization complete!"
echo ""
echo "📊 Results:"
echo "   Original: $ORIGINAL_SIZE"
echo "   Optimized: $NEW_SIZE"
echo "   Savings: ${SAVINGS}%"
echo ""

# Create backup and replace original
echo "💾 Creating backup and replacing original..."
mv "$INPUT_VIDEO" "$BACKUP_VIDEO"
mv "$OUTPUT_VIDEO" "$INPUT_VIDEO"

echo "✓ Original saved as: background-original.mp4"
echo "✓ Optimized video now in place: background.mp4"
echo ""
echo "🎉 Done! You can delete the backup if everything looks good."

