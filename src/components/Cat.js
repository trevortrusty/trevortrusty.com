import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from './Cat.module.css'; // Import the CSS module

function Cat() {
    const [leftEyePos, setLeftEyePos] = useState(78.004); 
    const [rightEyePos, setRightEyePos] = useState(-130.2); 
    const [direction, setDirection] = useState(1);
    const [step, setStep] = useState(2);
    const [ellipsis, animateEllipsis] = useState("");

    const addDot = () => {
        if(ellipsis === "...")
        {
            animateEllipsis("");
        }
        else {
            animateEllipsis(prev => prev + '.')
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {


            // Update the positions oscillating left/right
            setLeftEyePos(prev =>  prev - step);
            setRightEyePos(prev => prev + step);
            setStep(prev => -1 *prev);
          }, 1000); // Adjust the interval as needed (1000ms = 1 second)

          // Cleanup the interval when the component unmounts
          return () => clearInterval(intervalId);
    }, [step])

    useEffect(() => {
        const intervalId = setInterval(() => {
            addDot();
          }, 400); // Adjust the interval as needed (1000ms = 1 second)

          // Cleanup the interval when the component unmounts
          return () => clearInterval(intervalId);
    }, [ellipsis])

    return (
    <div className={styles.catContainer}>
        <div className="svg-container">
            <svg className='catSVG'
            width="105mm"
            height="105mm"
            version="1.1"
            viewBox="0 0 210 210"
            xmlns="http://www.w3.org/2000/svg"
            >
            <defs>
                <linearGradient
                id="a"
                x1="78.771"
                x2="86.442"
                y1="159.55"
                y2="149.87"
                gradientTransform="matrix(2.1876 0 0 2.1876 -98.465 -226.61)"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#ffe680" offset={0} />
                <stop stopColor="#ac631a" stopOpacity=".67451" offset=".56782" />
                <stop stopColor="#936111" stopOpacity=".8" offset=".76341" />
                </linearGradient>
            </defs>
            <a transform="matrix(2.1876 0 0 2.1876 -98.254 -226.61)">
                <path
                d="m59.526 143.35s-3.8747-32.806 1.0333-37.714c4.908-4.908 21.699 25.315 21.699 25.315s19.632-1.5499 22.473-0.77495c2.8415 0.77495 11.108-20.407 13.691-21.699s17.167-16.314 10.074 29.19c-6.6473 42.647-6.4579 38.489-6.4579 38.489s-7.2328 10.333-15.499 15.499c-8.2661 5.1663-11.598 8.532-20.898 3.8824-9.2994-4.6497-26.891-14.99-27.407-20.156-0.51663-5.1663 0.77495-18.34 1.2916-32.031z"
                strokeWidth=".765"
                style={{ paintOrder: "markers fill stroke" }}
                />
            </a>
            <path
                d="m141.96 108.91s-8.9912-3.2724-17.736 2.3779c-6.8852 4.4487-6.0121 13.781 0.11747 15.734 7.1017 2.2618 11.333-1.0808 14.644-4.1762 4.2716-3.9934 6.7608-10.032 2.9741-13.935z"
                fill="#ffe680"
                strokeWidth=".70406"
            />
            <path
                d="m65.683 110.4s8.7175-3.9442 17.865 1.0274c7.2024 3.9143 7.0389 13.286 1.0748 15.697-6.9099 2.7933-12.482 0.67998-16.018-2.1557-4.5619-3.6583-6.4026-10.39-2.9224-14.569z"
                fill="url(#a)"
                strokeWidth=".70406"
            />
            <path
                d="m86.139 117.53c3.6884 2.2916 2.7901 3.9556 2.7901 3.9556s-4.888-8.4791-22.307-9.4046c-2.0698-0.11003-1.7554-0.5354-1.5602-0.82376 5.0517-7.0993 17.078 3.7882 21.077 6.2728z"
                fill="#8e6915"
                fillOpacity=".62656"
                strokeWidth=".57879"
            />
            <path
                d="m65.633 110.33s5.619-2.1976 10.039-1.3236c4.4202 0.87406 6.0185 0.47448 9.7645 3.6211 3.746 3.1466 3.5712 5.0945 3.5712 5.0945s-5.9186-5.0196-9.4399-6.1934c-3.5212-1.1738-11.762-1.7481-13.935-1.1987z"
                fill="#6e4c1e"
                fillOpacity=".75934"
                strokeWidth=".57879"
            />
            <circle cx="77.507" cy="118.91" r="7.9817" strokeWidth=".57879" />
            <path
                d="m69.463 118.19s-0.09997 7.5419 6.4431 8.341c6.543 0.79916 8.4909-3.5961 8.4909-3.5961s-0.39958-1.9479-2.0978-1.7981c-1.6982 0.14984-2.5473 1.2487-2.5473 1.2487s-4.8948 2.1477-7.3421-2.2476c-2.4474-4.3953-2.9468-1.9479-2.9468-1.9479z"
                fill="#333"
                strokeWidth=".57879"
            />
            {"{"}/* {/* EYEBALL LEFT */} */{"}"}
            <ellipse
                cx={leftEyePos}
                cy="117.52"
                rx="2.9468"
                ry="2.7221"
                fill="#fff"
                strokeWidth=".57879"
            />
            <path
                d="m122.52 116.81c-3.6884 2.2916-2.79 3.9556-2.79 3.9556s4.888-8.4791 22.307-9.4046c2.0698-0.11004 1.7554-0.53541 1.5602-0.82377-5.0518-7.0993-17.078 3.7882-21.077 6.2728z"
                fill="#8e6915"
                fillOpacity=".62656"
                strokeWidth=".57879"
            />
            <path
                d="m143.02 109.61s-5.619-2.1976-10.039-1.3236-6.0185 0.47448-9.7645 3.6211c-3.746 3.1466-3.5712 5.0945-3.5712 5.0945s5.9186-5.0196 9.4399-6.1934c3.5212-1.1738 11.762-1.7481 13.935-1.1987z"
                fill="#6e4c1e"
                fillOpacity=".75934"
                strokeWidth=".57879"
            />
            <circle
                transform="scale(-1,1)"
                cx="-131.15"
                cy="118.19"
                r="7.9817"
                strokeWidth=".57879"
            />
            <path
                d="m139.19 117.47s0.1 7.5419-6.4431 8.341c-6.543 0.79915-8.4909-3.5961-8.4909-3.5961s0.39958-1.9479 2.0978-1.7981c1.6982 0.14985 2.5473 1.2487 2.5473 1.2487s4.8948 2.1477 7.3421-2.2476c2.4474-4.3953 2.9468-1.9479 2.9468-1.9479z"
                fill="#333"
                strokeWidth=".57879"
            />
            {"{"}/* {/* EYEBALL RIGHT*/} */{"}"}
            <ellipse
                transform="scale(-1,1)"
                cx={rightEyePos}
                cy="116.6"
                rx="2.9468"
                ry="2.7221"
                fill="#fff"
                strokeWidth=".57879"
            />
            <path
                d="m73.984 123.32"
                fill="#8e6915"
                fillOpacity=".62656"
                strokeWidth=".57879"
            />
            <path
                d="m103.89 145.29s-2.9049 33.323-12.528 34.614c-9.6226 1.2916-19.245-23.248-19.245-27.123 0-3.8747 1.9972-4.908 1.9972-4.908s8.8964 30.74 15.796 27.898c6.8992-2.8415 11.438-29.706 11.438-29.706z"
                fill="#f9f9f9"
                style={{ paintOrder: "markers fill stroke" }}
            />
            <path
                d="m101.6 147.6 0.10384 0.53231s7.348 33.581 15.982 28.156c8.6339-5.4246 15.063-30.998 14.88-34.098-0.1837-3.0998-2.9392-0.51664-2.9392-0.51664s-8.4502 34.873-13.226 32.548-13.594-26.607-13.594-26.607z"
                fill="#f9f9f9"
                style={{ paintOrder: "markers fill stroke" }}
            />
            <path
                d="m93.886 137.36s3.2878-5.4797 8.0369-6.941c4.7491-1.4612 8.4022 4.0184 9.4982 6.2103 1.0959 2.1919-6.941 0.73063-6.941 0.73063s-1.4612 5.845-0.73062 7.3063c0.73062 1.4612-3.2878 0.36531-3.2878 0.36531s-1.0959-5.4797-2.1919-6.941c-1.0959-1.4613-2.1919-1.0959-4.3838-0.73063z"
                fill="#1a1a1a"
                style={{ paintOrder: "markers fill stroke" }}
            />
            </svg>
        </div>
        <p className='left-text'>
            Website under construction{ellipsis}
        </p>
    </div>
    )
};

export default Cat;