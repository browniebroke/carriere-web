import React from 'react'

import Layout from '../components/layout'
import heroImage from '../images/carriere-overview.jpg'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <img src={heroImage} className="img-fluid" alt="Aperçu de la carrière" />
    <p>Bienvenue sur notre site.</p>
  </Layout>
)

export default IndexPage
