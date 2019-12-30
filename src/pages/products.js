/**@jsx jsx */
import { jsx } from 'theme-ui'
import Products from 'gatsby-theme-stripe-storefront/src/pages/products'
import SEO from '../components/seo'

export default props => (
  <Products {...props}>
    <SEO title="Products" />
  </Products>
)
