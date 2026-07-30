import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases CSS condicionales y resuelve conflictos de Tailwind de manera limpia.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
