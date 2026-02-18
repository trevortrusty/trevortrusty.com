import styles from './PrintsPage.module.css'
import React, { useRef, useEffect, useState } from 'react';
import Nav from './Nav';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const projects = [
  {
    num: '01',
    title: 'Modular Desk Organizer',
    description: 'Interlocking multi-section tray system for peripherals and cable routing.',
    tags: ['Fusion 360', 'PLA', '14 hrs'],
    github: null,
    demo: null,
  },
  {
    num: '02',
    title: 'Mechanical Keyboard Case',
    description: 'Low-profile 65% enclosure with RGB underglow diffuser channels.',
    tags: ['Blender', 'PETG', '22 hrs'],
    github: null,
    demo: null,
  },
  {
    num: '03',
    title: 'Articulating Phone Stand',
    description: 'Ball-socket adjustable mount with portrait/landscape flip and cable routing.',
    tags: ['Fusion 360', 'PLA+', '6 hrs'],
    github: null,
    demo: null,
  },
];

function PrintsPage({ setView }) {
  const parallaxRef = useRef();
  const pageRef = useRef(0);
  const isAnimating = useRef(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      if (isAnimating.current) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      const next = Math.max(0, Math.min(2, pageRef.current + dir));
      if (next !== pageRef.current) {
        pageRef.current = next;
        setCurrentPage(next);
        isAnimating.current = true;
        setTimeout(() => { parallaxRef.current?.scrollTo(next); }, 0);
        setTimeout(() => { isAnimating.current = false; }, 900);
      }
    };
    const el = parallaxRef.current?.container?.current;
    if (el) {
      el.addEventListener('wheel', onWheel, { passive: false });
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <div className={styles.appContainer}>
      <div className={styles.navWrapper}>
        <Nav onBack={() => setView('home')} />
      </div>
      <Parallax pages={3} ref={parallaxRef} className={styles.parallax}>
        {projects.map((p, i) => (
          <React.Fragment key={i}>
            <ParallaxLayer offset={i} speed={0.3} className={styles.ghostLayer}>
              <span className={styles.ghostNum}>{p.num}</span>
            </ParallaxLayer>
            <ParallaxLayer offset={i} speed={0.8} className={styles.contentLayer}>
              <div className={styles.card}>
                <h2 className={styles.projectTitle}>{p.title}</h2>
                <div className={styles.divider} />
                <p className={styles.description}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
                {(p.github || p.demo) && (
                  <div className={styles.links}>
                    {p.github && <a href={p.github} className={styles.link} target="_blank" rel="noreferrer">→ GitHub</a>}
                    {p.demo && <a href={p.demo} className={styles.link} target="_blank" rel="noreferrer">→ Live Demo</a>}
                  </div>
                )}
              </div>
            </ParallaxLayer>
          </React.Fragment>
        ))}
      </Parallax>
      <div className={styles.dots}>
        {projects.map((_, di) => (
          <span key={di} className={di === currentPage ? styles.dotActive : styles.dot} />
        ))}
      </div>
    </div>
  );
}

export default PrintsPage;
