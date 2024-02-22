import React from 'react';
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
                    <span className={styles.contactLabel}>Phone:</span> (04)24 889 541
                </li>
                <li className={styles.contactItem}>
                    <span className={styles.contactLabel}>Email:</span> <a href="mailto:marchsam1988@gmail.com">marchsam1988@gmail.com</a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;