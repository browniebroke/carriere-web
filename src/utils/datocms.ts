import { GraphQLClient } from 'graphql-request'

const API_TOKEN = process.env.DATOCMS_API_TOKEN || '5c9510728aa44244b58d9c5fe89f7b'

export const datoCmsClient = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
})

export async function fetchDatoCMS(query: string, variables?: Record<string, any>) {
  try {
    return await datoCmsClient.request(query, variables)
  } catch (error) {
    console.error('DatoCMS fetch error:', error)
    throw error
  }
}
