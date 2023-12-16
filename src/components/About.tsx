import React from 'react';
import styles from '../styles/About.module.css';

const About: React.FC = () => {
    return (
        <div className={styles.aboutContainer}>
            <h2 className={styles.aboutHeader}>About Me</h2>
            <p className={styles.aboutContent}>I am a full-stack web developer with a passion for learning and problem solving. I am a graduate of the University of Adelaide Coding Boot Camp, where I learned the MERN stack. I am currently working on many projects to showcase my skills. I am excited to continue to learn and grow as a developer.</p>
        </div>
    );
}

export default About;