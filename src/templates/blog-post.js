import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogPostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost
  const image = getImage(post.headerImage)

  return (
    <Layout>
      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "2rem" }}>
        <h1>{post.title}</h1>
        <p style={{ color: "#777", fontStyle: "italic" }}>
          {post.Date} &nbsp;–&nbsp; von {post.author?.name}
        </p>

        {image && (
          <GatsbyImage
            image={image}
            alt={post.title}
            style={{ margin: "2rem 0", borderRadius: "8px" }}
          />
        )}

        <p>{post.summary}</p>

        <section style={{ marginTop: "2rem", lineHeight: "1.7" }}>
          {documentToReactComponents(post.content.json)}
        </section>
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
        json
      }
      Date(formatString: "MMMM D, YYYY")
      headerImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1000)
      }
      author {
        name
      }
    }
  }
`
