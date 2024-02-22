import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
    return (
        <div className={styles.contactContainer}>
            <h2 className={styles.contactHeader}>Contact Me</h2>
            <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                    <span className={styles.contactLabel}>Name:</span> Sam March
                </li>
                <li className={styles.contactItem}>
                    <span className={styles.contactLabel}>Phone:</span> +61 424 889 541
                </li>
                <li className={styles.contactItem}>
                    <span className={styles.contactLabel}>Email:</span> <a href="mailto:marchsam1988@gmail.com">marchsam1988@gmail.com</a>
                </li>
            </ul>
            <h2 className={styles.socialMediaHeader}>Social Media</h2>
            <ul className={styles.socialMediaList}>
                <li className={styles.socialMediaItem}>
                    <a href="https://www.linkedin.com/in/sam-march-b9689323a/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </li>
                <li className={styles.socialMediaItem}>
                    <a href="https://github.com/SamMarch" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;