# Gatsby Starter Stripe Storefront

## WARNING!!!

This only works for Stripe's new Checkout API. If you create your products with "Orders" this will not work

This is a starter built off of [gatsby-theme-stripe-storefront](https://github.com/dayhaysoos/gatsby-theme-stripe/tree/master/packages/gatsby-theme-stripe-storefront)

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
import merge from "deepmerge";
import baseTheme from "gatsby-theme-stripe-storefront/src/gatsby-plugin-theme-ui";

export default merge(baseTheme, {
  colors: {
    primary: "coral",
    primaryText: "black",
    secondary: "skyblue"
  }
});
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

# Copy

To change the storefront copy, there is `strings.json` file where you can change the string value for storefront

`src/strings.json`

```
{
  "storefront": "Change this copy in the strings.json file!"
}
```
