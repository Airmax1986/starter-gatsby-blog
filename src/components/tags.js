import React from 'react'

import * as styles from './tags.module.css'

const Tags = ({ tags }) => (
  <div className={styles.container}>
    {tags && tags.length > 0 && (
      <small className={styles.tags}>
        {tags.split(',').map((tag) => (
          <div key={tag.trim()} className={styles.tag}>
            {tag.trim()}
          </div>
        ))}
      </small>
    )}
  </div>
)

export default Tags
