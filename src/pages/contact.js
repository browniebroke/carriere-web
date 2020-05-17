import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = ({ location, data }) => {
  const contactPage = data.datoCmsContactPage
  return (
    <Layout location={location}>
      <div className="my-5">
        <div className="row">
          <div className="col">
            <h1>{contactPage.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: contactPage.intro }} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 order-lg-1 align-self-center">
            <h2>{contactPage.mapTitle}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: contactPage.workshopLocation }}
            />
          </div>
          <div className="col-lg-8 order-lg-0 align-self-center">
            <div className="embed-responsive embed-responsive-21by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5742.481627766451!2d3.367443931626158!3d43.975069249864276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b3c1639c27bbad%3A0x9e427d1108895af!2sS.A.R.L.+Gilbert+Alla!5e0!3m2!1sen!2suk!4v1564603421040!5m2!1sen!2suk"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

export const contactPageQuery = graphql`
  query contactPageQuery {
    datoCmsContactPage {
      title
      intro
      mapTitle
      workshopLocation
    }
  }
`
