import React from 'react'

import * as styles from './tags.module.css'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <small className={styles.tags}>
      {tags && tags.length > 0 && tags.split(',').map((tag) => (
  <div key={tag.trim()} className={styles.tag}>
    {tag.trim()}
  </div>
))}
        <div key={tag} className={styles.tag}>
          {tag}
        </div>
      ))}
    </small>
  )

export default Tags
