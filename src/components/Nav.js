import React from 'react'
import styles from './Nav.module.css'


function Nav() {
  return (
    <div>
        <div className={styles.nav}>
            <div className={styles.navLeft}>
                <a href='./' className={styles.firstName}>TREVOR</a>
                <a href='./' className={styles.lastName}>TRUSTY</a>
            </div>
            <div className={styles.navRight}>
                <a className={styles.navBtnGithub}>GITHUB</a>
                <a className={styles.navBtnProjects}>PORTFOLIO</a>
            </div>
        </div>
    </div>
  )
}

export default Nav