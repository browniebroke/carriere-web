import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
    return (
      <div className="alert alert-info mb-0">
        <div className="lead text-center p-2">{alertData.content}</div>
      </div>
    )
  }
  return null
}

export default SiteAlert
