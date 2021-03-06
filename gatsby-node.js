
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const cardTemplate = path.resolve(`src/templates/cards.js`)
  return graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          html
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
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: cardTemplate,

      })
    })
  })
}
