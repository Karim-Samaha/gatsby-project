import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
export default function Template({ data }) {
  if (!data) {
    return <Layout>
      <h2>Loading...</h2>
    </Layout>
  }
  const card = data.markdownRemark
  return <Layout>
    <div className="appContainer">
      <h1>{card.frontmatter.title}</h1>
      <Link to="/">Go Back</Link>
    </div>
  </Layout>
}

export const SingleCardQuery = graphql`
query singleCard ($path: String!) {
    markdownRemark (frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
        description
      }
      excerpt
    }
  }
`