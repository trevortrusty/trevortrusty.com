import styles from './PrintsPage.module.css'
import React from 'react';
import Nav from './Nav'
import Cat from './Cat'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react';


function PrintsPage() {
    const [topOffset, setTopOffset] = useState(0);
    React.useEffect(() => {
        if (window.innerWidth <= 390) {
          setTopOffset(0.15);
        } else {
          setTopOffset(0);
        }
      }, [window.innerWidth]);
    return (
    <div className={styles.appContainer}>
        <Cat className={styles.catSVG}/>
        <Parallax pages={2}>
            <ParallaxLayer
                offset={0}
                speed={1}
            >
                <Nav />
            </ParallaxLayer>

        </Parallax>
    </div>
  )
}

export default PrintsPage