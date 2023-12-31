import React, { useEffect } from 'react'
import Prism from 'prismjs';
import styles from './CodeBlock.module.css'


function CodeBlock({ children}) {

    useEffect(() => {

    }, [])

    return (
    <div className={styles.block}>
        <div className={styles.copyBtn}>COPY</div>
        {children}
    </div>
  )
}

export default CodeBlock