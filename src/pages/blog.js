import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`
console.log(`this is a query ${query}`)

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage