import React from 'react';
import styles from '../styles/Portfolio.module.css';

const Portfolio: React.FC = () => {
    return (
        <div className={styles.portfolioContainer}>
            <h1 className={styles.portfolioHeader}>My Portfolio</h1>
            <p className={styles.portfolioContent}>Welcome to my portfolio!</p>
        </div>
    );
}

export default Portfolio;