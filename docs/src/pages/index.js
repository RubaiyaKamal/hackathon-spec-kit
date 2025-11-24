import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Rise of Physical AI"
      description="The New Era of Humanoid Machines - Understanding the Future of Robotics and AI">
      <main className={styles.hero}>
        <div className={styles.container}>
          {/* Book Cover Section */}
          <div className={styles.bookImage}>
            <img
              src={useBaseUrl('/img/physical-ai-book-cover.png')}
              alt="Rise of Physical AI Book Cover"
            />
            <div className={styles.glow}></div>
          </div>

          {/* Content Section */}
          <div className={styles.content}>
            <span className={styles.badge}>
              FUTURE OF ROBOTICS SERIES
            </span>

            <h1 className={styles.title}>
              Rise of Physical AI
            </h1>

            <h2 className={styles.subtitle}>
              The New Era of Humanoid Machines
            </h2>

            <p className={styles.description}>
              Explore the revolutionary convergence of artificial intelligence and
              robotics. Discover how humanoid machines are transforming industries,
              reshaping society, and redefining what it means to be human.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🤖</span>
                <span>Embodied Intelligence</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🏗️</span>
                <span>Industrial Revolution 5.0</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🧠</span>
                <span>Human-Robot Collaboration</span>
              </div>
            </div>

            <div className={styles.buttons}>
              <Link to="/docs/intro" className={styles.primaryBtn}>
                Start Reading <span className={styles.arrow}>→</span>
              </Link>
              <Link to="/blog-articles" className={styles.secondaryBtn}>
                Latest Articles
              </Link>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>18</div>
                <div className={styles.statLabel}>Chapters</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>300+</div>
                <div className={styles.statLabel}>Pages</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Open Source</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
      </main>
    </Layout>
  );
}