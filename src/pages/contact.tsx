import React from 'react'
import { graphql } from 'gatsby'
import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react'

import { Layout } from '../components/layout'

interface ContactPageProps {
  data: {
    datoCmsContactPage: {
      title: string
      intro: string
      mapTitle: string
      workshopLocation: string
    }
  }
}

const ContactPage = ({ data }: ContactPageProps) => {
  const contactPage = data.datoCmsContactPage
  return (
    <Layout>
      <Box>
        <Heading as="h1">{contactPage.title}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: contactPage.intro }} />
      </Box>
      <Box>
        <Heading as="h2">{contactPage.mapTitle}</Heading>
        <Text
          dangerouslySetInnerHTML={{ __html: contactPage.workshopLocation }}
        />
      </Box>
      <Box>
        <AspectRatio ratio={21 / 9} width="full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5742.481627766451!2d3.367443931626158!3d43.975069249864276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b3c1639c27bbad%3A0x9e427d1108895af!2sS.A.R.L.+Gilbert+Alla!5e0!3m2!1sen!2suk!4v1564603421040!5m2!1sen!2suk" />
        </AspectRatio>
      </Box>
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
