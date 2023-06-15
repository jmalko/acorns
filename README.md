# Acorns Starter Kit

*If you are looking for a complete website template, keep looking!*

This is a starting point for custom projects and will be updated over time.  The intent is not to make this a complete package, but to skip the slog of making a typical row/columns page builder.  

Includes what is needed to have a row fieldset that supports between 1 and 12 columns.  Each row and each column have controls over the background color, image, and a background image's opacity, as well as row padding.

These are sane defaults for building pages with an arbitrary row/column structure.

### Near-term Roadmap
- [x] Add row/column editor with background control
- [x] Add jQuery-based scrollTo anchor feature
- [x] Add jQuery-based slider
- [x] Add links -> buttons toggle
- [x] Add automatic default Assets container for those installing SK fresh
- [ ] Add row proportion options (1/3 - 2/3, etc)
- [ ] Add automatic tailwind configuration appending

### Screenshots
##### Fieldset
[![Acorns Fieldset](https://shoutmedia.net/assets/external/acorns-fieldset-1.jpg)](https://shoutmedia.net/assets/external/acorns-fieldset-1.jpg)
##### Live Preview 1
[![Acorns Live Preview 1](https://shoutmedia.net/assets/external/acorns-lp-1.jpg)](https://shoutmedia.net/assets/external/acorns-lp-1.jpg)
##### Live Preview 2
[![Acorns Live Preview 2](https://shoutmedia.net/assets/external/acorns-lp-2.jpg)](https://shoutmedia.net/assets/external/acorns-lp-2.jpg)

### Installation

- You must have an Assets container defined as "assets"
- Add "Rows" fieldset to your Blueprints
- In your front end template, replace your typical `{{ content }}` tag with `{{ partial src="acorns/rows" }}`
- In order to auto-scroll to a page section, set a row anchor, then make a link starting with a # and the name of the row anchor
- Sliders are in - configure them in `/resources/js/acorns.js`

```js
// tailwind.config.js

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
        variants: ['sm', 'md', 'lg', 'xl'],
      },
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

### Developer

Made by Jonathan Malko at https://shoutmedia.net - find me on the Statamic discord or email me at jmalko@shoutmedia.net with any questions or requests!
