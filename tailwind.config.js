/** @type {import('tailwindcss').Config} */
const withOpacity = (name) => `rgb(var(${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      colors: {
        bg: withOpacity('--color-bg'),
        surface: withOpacity('--color-surface'),
        surfaceAlt: withOpacity('--color-surfaceAlt'),
        ink: withOpacity('--color-ink'),
        sub: withOpacity('--color-sub'),
        muted: withOpacity('--color-muted'),
        hairline: withOpacity('--color-hairline'),
        hairlineStrong: withOpacity('--color-hairlineStrong'),
        link: withOpacity('--color-link'),
        linkHover: withOpacity('--color-linkHover'),
        accent: withOpacity('--color-accent'),
        tileBlue: withOpacity('--color-tileBlue'),
        tileYellow: withOpacity('--color-tileYellow'),
        tilePink: withOpacity('--color-tilePink'),
        tileGreen: withOpacity('--color-tileGreen'),
        tileRose: withOpacity('--color-tileRose'),
        tileIndigo: withOpacity('--color-tileIndigo'),
        tileLemon: withOpacity('--color-tileLemon'),
        tilePurple: withOpacity('--color-tilePurple'),
        tileMint: withOpacity('--color-tileMint'),
        tilePeach: withOpacity('--color-tilePeach'),
      },
      fontSize: {
        caption: ['11px', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        small: ['12.5px', { lineHeight: '1.55' }],
        body: ['14px', { lineHeight: '1.6' }],
        'body-lg': ['15.5px', { lineHeight: '1.6' }],
        h4: ['17px', { lineHeight: '1.35', letterSpacing: '-0.005em' }],
        h3: ['20px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        h2: ['24px', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        h1: ['32px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        display: ['44px', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
      },
      maxWidth: {
        page: '1120px',
        prose: '640px',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.05)',
        cardHover: '0 6px 16px rgba(15, 23, 42, 0.07), 0 2px 6px rgba(15, 23, 42, 0.05)',
      },
    },
  },
  plugins: [],
}
