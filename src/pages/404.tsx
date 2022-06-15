import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/layout'

const ContentStyles = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NotFoundPage: React.FC = () => (
  <Layout>
    <ContentStyles>
      <h1>Page introuvable</h1>
      <p>
        Cette page n'existe pas... <br />
      </p>
      <p>
        <Link to="/">Retour à l'acceuil</Link>
      </p>
    </ContentStyles>
  </Layout>
)

export default NotFoundPage
