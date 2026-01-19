/**
 * Centralized contact information and social links for Charles Plucker
 * 
 * This file serves as the single source of truth for all contact details,
 * social media links, and professional information used throughout the site.
 * 
 * Usage: Import and use these constants in any component that needs contact info.
 */

export const CONTACT_INFO = {
  email: 'charles.plucker@gmail.com',
  graduationYear: 2010,
  graduationMonth: 4, // May (0-indexed, so 4 = May)
} as const

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/charles-plucker/',
  linkedinRecommendations: 'https://www.linkedin.com/in/charles-plucker/details/recommendations/',
  instagram: 'https://www.instagram.com/charlesisastrangeloop/',
} as const

/**
 * Helper function to calculate years of experience dynamically
 */
export function getYearsOfExperience(): number {
  const graduationDate = new Date(CONTACT_INFO.graduationYear, CONTACT_INFO.graduationMonth)
  const now = new Date()
  return now.getFullYear() - graduationDate.getFullYear()
}

