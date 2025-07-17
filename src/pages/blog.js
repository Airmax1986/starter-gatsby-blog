import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    
    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <Hero title="Blog" />
        <div className="wrapper">
          <ul className="article-list">
            {posts.map(post => (
              <li key={post.slug}>
                <ArticlePreview post={post} />
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { Date: DESC }) {
      nodes {
        title
        slug
        Date(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description 
      }
    }
  }
`
