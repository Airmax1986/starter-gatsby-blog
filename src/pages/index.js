// index.js
import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlePreview from "../components/article-preview" // 🔥 hinzufügen

const IndexPage = ({ data }) => {
  const posts = data.allContentfulBlogPost.nodes

  return (
    <Layout>
      <h1>Blog</h1>
      <ArticlePreview posts={posts} /> {/* ✅ verwenden */}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { Date: DESC }) {
      nodes {
        title
        slug
        summary
        Date(formatString: "MMMM D, YYYY")
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
