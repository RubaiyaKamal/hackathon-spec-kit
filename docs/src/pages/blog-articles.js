import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './blog-articles.module.css';

const blogArticles = [
    {
        category: 'Career & Learning',
        articles: [
            { title: 'How to Break Into Robotics', description: 'Complete career guide for aspiring roboticists', slug: 'how-to-break-into-robotics' },
            { title: 'Top Universities for Robotics', description: 'Global overview of leading robotics programs', slug: 'top-universities-robotics' },
            { title: 'Software Dev to Robotics Engineer', description: 'Personal journey and practical advice for career changers', slug: 'software-to-robotics' },
            { title: 'Essential Math for Robotics', description: 'Linear algebra, calculus, and more explained', slug: 'essential-math-robotics' },
        ]
    },
    {
        category: 'Ecosystem & Community',
        articles: [
            { title: 'Open Source Robotics Projects', description: 'ROS, Gazebo, OpenCV, and essential tools', slug: 'open-source-robotics' },
            { title: 'Robotics Competitions', description: 'FIRST Robotics, RoboCup, and more', slug: 'robotics-competitions' },
            { title: 'Best YouTube & Podcasts', description: 'Top learning resources and community content', slug: 'youtube-podcasts-robotics' },
            { title: 'Robotics Startup Landscape 2025', description: 'Funding trends and key success factors', slug: 'robotics-startups-2025' },
        ]
    },
    {
        category: 'Robot Spotlights',
        articles: [
            // Removed: { title: 'Tesla Optimus Deep Dive', description: 'Technical specs and future predictions', slug: 'tesla-optimus' },
            { title: 'Spot vs Atlas Comparison', description: 'Head-to-head robot comparison', slug: 'spot-vs-atlas' },
            { title: 'Amazon Warehouse Robots', description: '750,000 robots transforming logistics', slug: 'amazon-warehouse-robots' },
            { title: 'da Vinci Surgical Robot', description: 'How surgical robotics works', slug: 'da-vinci-surgical-robot' },
        ]
    },
    {
        category: 'Hardware & Components',
        articles: [
            { title: 'Choosing Robot Sensors', description: 'Ultrasonic, LiDAR, cameras, and more', slug: 'choosing-robot-sensors' },
            { title: 'Servo vs Stepper Motors', description: 'Detailed motor comparison guide', slug: 'servo-vs-stepper-motors' }, // Corrected slug
            { title: 'Best Microcontrollers 2025', description: 'Arduino, ESP32, Raspberry Pi compared', slug: 'best-microcontrollers-robotics-2025' }, // Corrected slug
            { title: '3D Printing for Robotics', description: 'Materials, tips, and best practices', slug: '3d-printing-robotics' },
        ]
    },
    {
        category: 'AI & Software',
        articles: [
            { title: 'Machine Learning Models', description: 'CNNs, RNNs, and RL for robotics', slug: 'ml-models-robotics' },
            { title: 'Reinforcement Learning', description: 'PPO, SAC, and robot control', slug: 'reinforcement-learning' },
            { title: 'Simulation Before Reality', description: 'Gazebo, PyBullet, Isaac Sim guide', slug: 'simulation-robotics' },
            { title: 'Computer Vision Libraries', description: 'OpenCV, YOLO, MediaPipe essentials', slug: 'computer-vision-libraries' },
        ]
    },
    {
        category: 'Fun & Engaging',
        articles: [
            { title: 'Robots That Failed', description: 'Lessons from spectacular failures', slug: 'robots-that-failed' },
            { title: 'Movies vs Reality', description: 'Separating sci-fi from engineering', slug: 'movies-vs-reality' },
            { title: 'Best Robot Demos 2024', description: 'Year\'s most impressive achievements', slug: 'robot-demos-2024' },
            { title: 'Build Robot Under $100', description: 'Budget-friendly robot projects', slug: 'robot-under-100' },
        ]
    },
];

export default function BlogArticles() {
    return (
        <Layout
            title="Latest Articles"
            description="Explore comprehensive articles about robotics, AI, and physical intelligence">
            <div className={styles.blogPage}>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarHeader}>
                        <h2>Latest Articles</h2>
                        <p>24 Articles</p>
                    </div>
                    {blogArticles.map((section, idx) => (
                        <div key={idx} className={styles.sidebarSection}>
                            <h3>{section.category}</h3>
                            <ul>
                                {section.articles.map((article, articleIdx) => (
                                    <li key={articleIdx}>
                                        <a
                                            href={`#${article.slug}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById(article.slug)?.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start'
                                                });
                                            }}
                                        >
                                            {article.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </aside>

                <main className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1>Latest Articles on Robotics & Physical AI</h1>
                        <p>Comprehensive guides, tutorials, and insights for robotics enthusiasts</p>
                    </div>

                    {blogArticles.map((section, idx) => (
                        <section key={idx} className={styles.categorySection}>
                            <h2 className={styles.categoryTitle}>{section.category}</h2>
                            <div className={styles.articlesGrid}>
                                {section.articles.map((article, articleIdx) => (
                                    <Link
                                        key={articleIdx}
                                        id={article.slug}
                                        to={`/blog/${article.slug}`}
                                        className={styles.articleCard}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <h3>{article.title}</h3>
                                        <p>{article.description}</p>
                                        <div className={styles.articleFooter}>
                                            <span className={styles.articleMeta}>500 words · 3 min read</span>
                                            <span className={styles.readMore}>Read Article →</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </main>
            </div>
        </Layout>
    );
}
