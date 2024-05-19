# Multi blog with Eleventy, Liquid, classless CSS framework & DecapCMS

### Folder structure

- templates in /content
- documentation in /content/doc with aside navigation
- blog in /content/blog with pagination navigation
- layouts in /_layouts
- includes in /_includes
- JSON files in /_data
- CSS files in /assets/css
- images & JS in /assets with /admin (Decap CMS)

### Page layout

- _layouts/base.liquid: head code + DecapCMS scripts
- _layouts/default.liquid: HTML5 structure with ARIA landmarks
- _includes/nav-primary.liquid with primary navigation
- _includes/nav-secondary.liquid with secondary navigation
- _includes/nav-pagination.liquid with pagination navigation
- _includes/nav-footer.liquid with footer navigation
- _includes/copyright.liquid to include in footer

### Navigation links

- tags: add primary, secondary or footer in frontmatter
- for secondary tags, add folder with folder's name in frontmatter

### Package.json scripts
- "serve": "npx @11ty/eleventy --serve",
- "start": "npx decap-server & npx @11ty/eleventy --serve",
- "build": "@11ty/eleventy",
- "build-gp": "eleventy --pathprefix '13-simple-blog'"

### Dependencies
- "@11ty/eleventy": "^2.0.1"
- ready for [Decap CMS](https://decapcms.org/) integration.
- ready for GitHub Pages (.github/workflows/)

### eleventy.config.js
```
module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./assets");
  eleventyConfig.addPassthroughCopy("./assets");
  return {
    dir: {
      input: "content", // Set the source for 11ty
      layouts: "../_layouts", // Base page layouts
      includes: "../_includes", // All UI partials
      data: "../_data", // JSON datasets
      output: "_site" // This is the default
    }
  };
};
```
