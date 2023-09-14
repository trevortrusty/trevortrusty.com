import React from 'react'
import styles from './CodeBlock.module.css'
function CodeBlock({ children}) {
  return (
    <div className={styles.block}>{children}</div>
  )
}

export default CodeBlock