import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const posts = data.allContentfulBlogPost.nodes

  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <p>{post.date}</p>
            {post.headerImage && (
              <GatsbyImage
                image={getImage(post.headerImage)}
                alt={post.title}
              />
            )}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
      nodes {
        title
        slug
        summary
        date(formatString: "MMMM D, YYYY")
        content
        headerImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 800)
        }
        author {
          name
        }
      }
    }
  }
`
