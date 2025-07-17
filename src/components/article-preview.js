// src/components/article-preview.js
import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./article-preview.module.css"

const ArticlePreview = ({ posts }) => {
  if (!posts || !Array.isArray(posts)) return null

  return (
    <ul className={styles.articleList}>
      {posts.map((post) => (
        <li key={post.slug} className={styles.articleItem}>
          <Link to={`/blog/${post.slug}`} className={styles.link}>
            {post.headerImage && (
              <GatsbyImage
                image={getImage(post.headerImage)}
                alt={post.title}
                className={styles.image}
              />
            )}
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.date}>{post.Date}</p>
            <p className={styles.summary}>{post.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ArticlePreview
