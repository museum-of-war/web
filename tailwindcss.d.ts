// Fix trouble with types
declare module 'tailwindcss/resolveConfig';
declare module 'tailwindcss/tailwind-config' {
  type TailwindThemeValue = any;
}
