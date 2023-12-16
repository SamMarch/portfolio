import React from 'react';
import styles from '../styles/Projects.module.css';

const Projects: React.FC = () => {
    return (
        <div className={styles.projectsContainer}>
            <h2>My Projects</h2>
            <div className={styles.projectCard}>
                <h3 className={styles.projectTitle}>Project 1</h3>
                <p className={styles.projectDescription}>This is a description of my first project. It's a web application built with React and TypeScript.</p>
            </div>
            <p>More coming soon!</p>
        </div>
    );
}

export default Projects;