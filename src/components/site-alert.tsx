import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Box, Container } from '@chakra-ui/react'

export const SiteAlert = () => {
  const { alertData } = useStaticQuery(graphql`
    query siteAlertQuery {
      alertData: datoCmsSiteAlert {
        isActive
        startDate
        endDate
        content
      }
    }
  `)
  const startDate = new Date(alertData.startDate)
  const endDate = new Date(alertData.endDate)
  const today = new Date()
  if (alertData.isActive && startDate < today && today < endDate) {
    return (
      <>
        <Box
          backgroundColor="blue.200"
          color="blue.900"
          textAlign="center"
          fontSize="xl"
        >
          <Container maxWidth="4xl">
            <Box paddingY={4}>{alertData.content}</Box>
          </Container>
        </Box>
      </>
    )
  }
  return null
}
