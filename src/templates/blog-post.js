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
        <p><em>{post.date}</em> &nbsp;–&nbsp; von {post.author?.name}</p>
        {image && (
          <GatsbyImage image={image} alt={post.title} style={{marginBottom: "2rem"}} />
        )}
        <p>{post.summary}</p>
        <div style={{marginTop: "2rem", lineHeight: "1.6"}}>
          <div dangerouslySetInnerHTML={{ __html: post.content.content }} />
        </div>
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
      content {
        content
      }
      date(formatString: "MMMM D, YYYY")
      headerImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1000)
      }
      author {
        name
      }
    }
  }
`
