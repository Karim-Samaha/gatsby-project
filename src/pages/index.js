import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/home/Home"
import { graphql } from "gatsby"



const IndexPage = ({ data }) => {
  if (!data) {
    return <Layout>
      <Seo title="Home" />
      <h2>Loading...</h2>
    </Layout>
  }
  return <Layout>
    <Seo title="Home" />
    <Home data={data} />
  </Layout>
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            description
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
