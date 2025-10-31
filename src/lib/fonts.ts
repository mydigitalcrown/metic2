/**
 * Font configuration for the application
 * 
 * For offline development: This file provides system font fallbacks.
 * The app will use Google Fonts when online, and gracefully fall back
 * to system fonts when offline.
 * 
 * To enable offline builds, you can comment out the Google Font imports
 * and uncomment the local font configuration below.
 */

import { Inter, JetBrains_Mono } from "next/font/google";

// Configure Inter font with system font fallbacks
export const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Arial",
    "sans-serif",
  ],
});

// Configure JetBrains Mono font with monospace fallbacks
export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "Consolas",
    "Monaco",
    "Courier New",
    "monospace",
  ],
});

/* 
 * OFFLINE MODE: Uncomment the code below and comment out the Google Font imports above
 * to work completely offline without internet access for fonts.
 * 
 * export const inter = {
 *   variable: "--font-sans",
 *   style: {
 *     fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
 *   },
 * };
 * 
 * export const jetbrainsMono = {
 *   variable: "--font-mono",
 *   style: {
 *     fontFamily: "Consolas, Monaco, 'Courier New', monospace",
 *   },
 * };
 */

