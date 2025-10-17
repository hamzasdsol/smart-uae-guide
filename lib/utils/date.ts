/**
 * Formats a date to a readable string format
 * @param date - Date object to format
 * @returns Formatted date string (e.g., "October 13, 2025")
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Returns the current date formatted as a readable string
 * @returns Current date string (e.g., "October 13, 2025")
 */
export function getCurrentDate(): string {
  return formatDate(new Date());
}
