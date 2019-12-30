import merge from 'deepmerge'
import baseTheme from 'gatsby-theme-stripe-storefront/src/gatsby-plugin-theme-ui'

export default merge(baseTheme, {
  colors: {
    primary: '#03275A',
    primaryText: '#fff',
    secondary: '#1A7DD7',
    secondaryText: 'black',
    accent: '#F34605',
  },
})
