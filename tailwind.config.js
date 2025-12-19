/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#07416B',
        accent: '#1976D2'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Apply custom styles to markdown elements rendered inside the .prose class
            // This enhances readability and matches the general app styling
            h1: {
              color: theme('colors.pm-navy'),
              marginBottom: theme('spacing.6'),
              borderBottom: `1px solid ${theme('colors.gray.200')}`,
              paddingBottom: theme('spacing.2'),
            },
            h2: {
              color: theme('colors.pm-navy'),
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.4'),
            },
            p: {
              marginBottom: theme('spacing.4'),
              lineHeight: theme('lineHeight.relaxed'), // Use a relaxed line height
            },
            ul: {
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
            },
            a: {
              color: theme('colors.primary'),
              fontWeight: theme('fontWeight.medium'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            // Ensure code blocks look good
            pre: {
              backgroundColor: theme('colors.gray.50'),
              color: theme('colors.gray.700'),
              border: `1px solid ${theme('colors.gray.200')}`,
            },
          },
        },
      }),
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
