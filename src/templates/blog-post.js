import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const BlogPostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost
  const image = getImage(post.headerImage)

  return (
    <Layout>
      <article>
        <h1>{post.title}</h1>
        <p><em>{post.Date}</em> &nbsp;–&nbsp; von {post.author?.name}</p>
        {image && (
          <GatsbyImage image={image} alt={post.title} style={{ marginBottom: "2rem", borderRadius: "8px" }} />
        )}
        <p>{post.summary}</p>

        {/* Hier wird der Markdown-Content als HTML ausgegeben */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post.content.childMarkdownRemark.html }}
        />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      summary
      Date(formatString: "MMMM D, YYYY")
      headerImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1000)
      }
      author {
        name
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

