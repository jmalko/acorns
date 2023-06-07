module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.antlers.php',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  safelist: [
      {
        pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/,
        variants: ['sm', 'md', 'lg', 'xl'],
      },
      {
        pattern: /py-(1|2|3|4|5|6|7|8|9|10|11|12|24)/,
      },
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
