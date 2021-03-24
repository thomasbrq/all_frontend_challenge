module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image-hero-desktop': 'url("images/image-hero-desktop.jpg")',
        'image-hero-mobile': 'url("images/image-hero-mobile.jpg")',
        'bookmark': 'url("images/icon-bookmark.svg")',
       }),
       screens: {
        'mobile': {'max': '1024px'},
        // => @media (max-width: 1024px) { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
