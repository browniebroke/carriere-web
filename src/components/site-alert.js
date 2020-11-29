import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Alert } from '@browniebroke/react-ui-components'

const SiteAlert = () => {
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
    return <Alert alertType="info">{alertData.content}</Alert>
  }
  return null
}

export default SiteAlert
