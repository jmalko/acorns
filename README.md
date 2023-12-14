# Acorns Starter Kit

* Dec 2023 - Major rewrite, no dependencies.  Use what you like for CSS and JS, still get the rows. *

This is a starting point for custom projects and will be updated over time.  The intent is not to make this a complete package, but to skip the slog of making a typical row/columns page builder.  

Includes what is needed to have a row fieldset that supports between 1 and 12 columns.  Each row and each column have controls over the background color, image, and a background image's opacity, as well as row padding.

These are sane defaults for building pages with an arbitrary row/column structure.

### CSS Features

No longer dependent on Tailwind.

Scoped CSS now in play.  It is vanilla CSS with the ability to scope by using `me { }` in order to reference the current div.

### Installation

- You must have an Assets container defined as "assets"
- In your front end template, replace your typical `{{ content }}` tag with `{{ partial src="acorns/rows" }}`

### Developer

Made by Jonathan Malko at https://shoutmedia.net - find me on the Statamic discord or email me at jmalko@shoutmedia.net with any questions or requests!
