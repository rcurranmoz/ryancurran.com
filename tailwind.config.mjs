/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:        'rgb(var(--bg) / <alpha-value>)',
        'bg-soft': 'rgb(var(--bg-soft) / <alpha-value>)',
        fg:        'rgb(var(--fg) / <alpha-value>)',
        accent:    'rgb(var(--accent) / <alpha-value>)',
        dim:       'rgb(var(--dim) / <alpha-value>)',
        rule:      'rgb(var(--rule) / <alpha-value>)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 12px rgb(var(--accent) / 0.35)',
      },
    },
  },
  plugins: [],
};
