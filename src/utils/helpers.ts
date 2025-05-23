// helpers.ts
// General-purpose utility functions

/**
 * Capitalizes the first letter of a string.
 * @param str - Input string
 * @returns A new string with the first letter capitalized
 */
export function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Formats a number as currency (USD by default).
 * @param amount - The number to format
 * @param currency - Currency code (default is 'USD')
 * @returns A formatted currency string
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Checks if a value is an empty object.
 * @param obj - Any value
 * @returns True if the value is an object with no own properties
 */
export function isEmptyObject(obj: any): boolean {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}
