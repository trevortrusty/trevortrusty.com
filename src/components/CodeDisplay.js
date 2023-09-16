import React, { useEffect } from 'react'
import Prism from 'prismjs';
import styles from './CodeDisplay.module.css'


function CodeDisplay({ children}) {

    useEffect(() => {

    }, [])

    return (
    <div className={styles.block}>
        {children}
    </div>
  )
}

export default CodeDisplay