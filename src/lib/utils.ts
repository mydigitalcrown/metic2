import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for conditional class merging
 * @param inputs - Class values to be conditionally merged
 * @returns A string of merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as a currency string
 * @param value - The number to format
 * @param options - Formatting options
 * @returns A formatted currency string
 */
export function formatCurrency(
  value: number, 
  options: { 
    currency?: string, 
    locale?: string 
  } = {}
) {
  const { currency = "USD", locale = "en-US" } = options;
  
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}

/**
 * Adds delay to async functions for UI purposes
 * @param ms - The number of milliseconds to delay
 * @returns A promise that resolves after the specified time
 */
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
