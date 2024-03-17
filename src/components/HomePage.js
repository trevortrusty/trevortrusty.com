import styles from './HomePage.module.css'
import React from 'react';
import Nav from './Nav'
import HomeTopIntro from './HomeTopIntro.js';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react';


function HomePage() {
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
        <Parallax pages={3}>

            <ParallaxLayer 
                className={styles.section1background}
                offset={0.45 - topOffset}
                speed={.2}
                factor={1} 
            />

            <ParallaxLayer
                offset={0}
                speed={1}
            >
                <Nav />
            </ParallaxLayer>

            <ParallaxLayer 
                className={styles.section1}
                speed={.03}
                offset={-.09 - topOffset}
            >
                <HomeTopIntro />
            </ParallaxLayer>

            <ParallaxLayer 
                className={styles.section3}
                speed={.9}
                offset={1}
            >
            </ParallaxLayer>

            <ParallaxLayer 
                className={styles.section3content}
                speed={1.1}
                offset={1.2}
            >
                <h1>Software Projects</h1>
                <p>Check out my latest web and various software projects</p>
            </ParallaxLayer>

            <ParallaxLayer 
                className={styles.section4}
                id={styles.container3dprint}
                speed={1}
                offset={1.9}
            >
            </ParallaxLayer>

            <ParallaxLayer 
                className={styles.section4content}
                id={styles.content3dprint}
                speed={1.2}
                offset={1.99999}
            >
            <h1>3D Printing</h1>
            <p>See what I'm working on with CAD and my FDM printer!</p>
            </ParallaxLayer>

            </Parallax>
    </div>
  )
}

export default HomePage