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
} as const

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/charles-plucker/',
  linkedinRecommendations: 'https://www.linkedin.com/in/charles-plucker/details/recommendations/',
  instagram: 'https://www.instagram.com/charlesisastrangeloop/',
} as const

/**
 * Calculate years of experience aof Charles Plucker
 * Career start date: July 1st, 2010
 * Returns complete years only (rounds down)
 */
export function getYearsOfExperience(): number {
  // Career started July 1st, 2010
  const careerStartDate = new Date(2010, 6, 1) // Month is 0-indexed (6 = July)
  const now = new Date()
  
  // Calculate full years (rounding down)
  let years = now.getFullYear() - careerStartDate.getFullYear()
  
  // If we haven't reached the anniversary date this year, subtract one year
  if (
    now.getMonth() < careerStartDate.getMonth() ||
    (now.getMonth() === careerStartDate.getMonth() && now.getDate() < careerStartDate.getDate())
  ) {
    years--
  }
  
  return years
}
