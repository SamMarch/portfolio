import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
    return (
        <div className={styles.contactContainer}>
            <h2 className={styles.contactHeader}>Contact Me</h2>
            <form className={styles.contactForm}>
                <label className={styles.contactLabel} htmlFor="name">Name</label>
                <input className={styles.contactInput} type="text" id="name" name="name" />

                <label className={styles.contactLabel} htmlFor="email">Email</label>
                <input className={styles.contactInput} type="email" id="email" name="email" />

                <label className={styles.contactLabel} htmlFor="message">Message</label>
                <textarea className={styles.contactInput} id="message" name="message"></textarea>

                <button className={styles.contactButton} type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;