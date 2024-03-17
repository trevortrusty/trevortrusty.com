import React from 'react'
import laptop from '../blender_laptop.png'
import laptopOn from '../blender_laptop_temple.png'
import styles from './HomeTopIntro.module.css'
import { useState } from 'react';
function HomeTopIntro() {
    const [laptopState, setLaptopState] = useState(false);
    const toggleLaptopState = () => {
        setLaptopState(!laptopState);
        console.log(laptopState);
    }

    return (
        <div className={styles.section1}>
            <div className={styles.flex1}>  
                <h1>FULL STACK <span className={styles.developer}>DEVELOPER,</span></h1>
                <h3>SOFTWARE CREATOR & MUSICIAN</h3>
            </div>
            <div className={styles.flex2}>
                {
                laptopState ? 
                <img onClick={toggleLaptopState} className={styles.laptop} width='80%' src={laptopOn}/>
                    : <img onClick={toggleLaptopState} className={styles.laptop} width='80%' src={laptop}/>
                } 
            </div>
        </div>
    )
}

export default HomeTopIntro