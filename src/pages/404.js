import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div className="row my-5 text-center">
      <div className="col-md-12">
        <h1>Page introuvable</h1>
        <p>
          Pas moyen de trouver la page recherchée... <br />
        </p>
        <p>
          <Link to="/">Retour à l'acceuil</Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
