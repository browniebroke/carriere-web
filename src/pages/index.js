import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import heroImage from '../images/carriere-overview.jpg'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <img src={heroImage} className="img-fluid" alt="Aperçu de la carrière" />
    <p>Bienvenue sur notre site.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
