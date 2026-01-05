import Link from 'next/link';
import styles from './BookConsultationCTA.module.css';

export function BookConsultationCTA() {
    return (
        <section className={styles.cta}>
            <div className={styles.ctaInner}>
                <div className={styles.ctaContent}>
                    <h3>Ready to Start Your Journey?</h3>
                    <p>Book a free 15-minute consultation to discuss how therapy can help you.</p>
                </div>
                <Link href="https://salowal.com/contact" className="btn btn-primary btn-lg">
                    Book Free Consultation
                </Link>
            </div>
        </section>
    );
}
