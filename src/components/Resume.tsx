import React from 'react';
import styles from '../styles/Resume.module.css';

const Resume: React.FC = () => {
    return (
        <div className={styles.resumeContainer}>
            <h2 className={styles.resumeHeader}>My Resume</h2>
            <a className={styles.resumeContent} href="public\Resume.pdf" download>Download Resume</a>
        </div>
    );
}

export default Resume;