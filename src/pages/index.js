/**@jsx jsx */
import { jsx } from 'theme-ui'
import Home from 'gatsby-theme-stripe-storefront/src/pages/index'
import SEO from '../components/seo'

export default props => (
  <Home {...props}>
    <SEO title="Home" />
  </Home>
)
