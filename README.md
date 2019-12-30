# Gatsby Starter Stripe Storefront

## WARNING!!!

This only works for Stripe's new Checkout API. If you create your products with "Orders" this will not work

This is a starter built off of [gatsby-theme-stripe-storefront](https://github.com/dayhaysoos/gatsby-theme-stripe/tree/master/packages/gatsby-theme-stripe-storefront)

The base of this starter is using the default gatsby starter

# Features

- Shopping Cart experience with your Stripe products from the dashboard
- Responsive for desktop, tablet and mobile
- Optimizations from Gatsby's default starter (SEO component and configuration for images)
- Configuration for collecting billing addresses

# Usage

The idea is to be able to quickly set up a bare-minimum e-commerce page using your Stripe API keys.

You can get your Stripe API keys here:

[https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)

Be sure to set up environment variables at the root of the project so you can hide your secret keys:

`.env.development`

```
STRIPE_API_SECRET=SECRET_KEY_HERE
STRIPE_API_PUBLIC=PUBLIC_KEY_HERE

```

For production, you need env variables for your live API keys

To get your Stripe products running to display in this starter, you need to pass your Stripe API Public key to the `gatsby-config.js` file:

```
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-stripe-storefront',
      options: {
        stripePublicKey: process.env.STRIPE_API_PUBLIC,
        billingAddressCollection: 'required', // optional if you need billing addresses from customers
        successUrl: localhost:8000/thank-you // replace this url with the real url to your site with /thank-you at the end
      },
    },
  ],
}

```

We intentionally avoid passing the stripeSecretKey in Gatsby config for security reasons.

Your secret key will float down to the gatsby-node file in `gatsby-theme-stripe-storefront`

# Styling

You probably want to change the main colors of the storefront. You can do so by updating the theme object:

`src/gatsby-plugin-theme-ui/index.js`

```js
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
```

Change the primary, secondary and primaryText values to be the colors that you desire.

# Logo

You can replace the logo with an image of your choice. There is a logo component that takes in an imported image. You can use extended shadowing to accomplish this.

Change logo.js to look like the following:

`src/gatsby-theme-stripe-storefront/components/logo.js`

```
import Logo from 'gatsby-theme-stripe-storefront/src/components/logo'
import image from 'path/to/image'

export default props => <Logo {...props} logo={image} />

```

# SEO

Because this was made with Gatsby's default starter, the SEO component is available to use on each of your pages. The index page is being shadowedjust to use the SEO component because the starter itself doesn't have SEO set up.

# Notes

### Thank you page after successful transaction

The `/thank-you` page deletes the shopping cart data and redirects to the home page. This was a cheap solution for not being able to clear the shopping cart after the purchase. Please make sure your successURL points to the /thank-you page.

### Home Page and Products Page

By default, these are the same. If you'd like to have your own content for your home page, simply make an index.js file in the `pages` directory.
