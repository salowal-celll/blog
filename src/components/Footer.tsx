import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

interface FooterProps {
    companyName?: string;
    variant?: 'main' | 'business';
    tagline?: string;
}

export function Footer({
    companyName = 'Salowal',
    variant = 'main',
    tagline,
}: FooterProps) {
    const currentYear = new Date().getFullYear();

    const defaultTagline = variant === 'business'
        ? 'EDI training, anti-racism consultancy, and workplace wellbeing.'
        : 'Culturally sensitive therapy and trauma-informed support.';

    return (
        <footer className={styles.footer}>
            <div className={styles.footerMain}>
                <div className={styles.footerInner}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <Link href="/" className={styles.brandLink}>
                            <div className={styles.logo}>
                                <Image
                                    src="/logo.png"
                                    alt="Salowal"
                                    width={40}
                                    height={40}
                                    className={styles.logoImg}
                                />
                            </div>
                            <span className={styles.brandName}>
                                {variant === 'business' ? 'Salowal for Business' : companyName}
                            </span>
                        </Link>
                        <p className={styles.tagline}>
                            {tagline || defaultTagline}
                        </p>
                        <div className={styles.social}>
                            <a href="https://linkedin.com/company/salowal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com/salowal" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {variant === 'main' ? (
                        <>
                            {/* Main Site - Services */}
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>Services</h4>
                                <ul className={styles.columnLinks}>
                                    <li><Link href="/therapy">Individual Therapy</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/assessment">Assessment</Link></li>
                                </ul>
                            </div>

                            {/* Main Site - Support */}
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>Support</h4>
                                <ul className={styles.columnLinks}>
                                    <li><Link href="/contact">Contact</Link></li>
                                    <li><Link href="/#faq">FAQs</Link></li>
                                    <li><a href="https://blog.salowal.com">Blog</a></li>
                                    <li><a href="https://blog.salowal.com">Resources</a></li>
                                </ul>
                            </div>

                            {/* Main Site - For Businesses */}
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>For Businesses</h4>
                                <ul className={styles.columnLinks}>
                                    <li><a href="https://business.salowal.com">EDI Training</a></li>
                                    <li><a href="https://business.salowal.com">Consultancy</a></li>
                                    <li><a href="https://business.salowal.com">Health Screenings</a></li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Business Site - Services */}
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>Services</h4>
                                <ul className={styles.columnLinks}>
                                    <li><Link href="/">EDI Training</Link></li>
                                    <li><Link href="/">Consultancy</Link></li>
                                    <li><Link href="/">Health Screenings</Link></li>
                                </ul>
                            </div>

                            {/* Business Site - Resources */}
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>Resources</h4>
                                <ul className={styles.columnLinks}>
                                    <li><Link href="/case-studies">Case Studies</Link></li>
                                    <li><a href="https://blog.salowal.com">Blog</a></li>
                                    <li><Link href="/#faq">FAQs</Link></li>
                                </ul>
                            </div>

                            {/* Business Site - Individuals */}
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>For Individuals</h4>
                                <ul className={styles.columnLinks}>
                                    <li><a href="https://salowal.com/therapy">Private Therapy</a></li>
                                    <li><a href="https://salowal.com/about">About Us</a></li>
                                    <li><a href="https://salowal.com/contact">Contact</a></li>
                                </ul>
                            </div>
                        </>
                    )}

                    {/* Contact - Same for both */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Get Started</h4>
                        <p className={styles.contactEmail}>
                            <a href="mailto:admin@salowal.com">admin@salowal.com</a>
                        </p>
                        <Link href={variant === 'business' ? '/enquiry' : '/contact'} className={styles.ctaButton}>
                            {variant === 'business' ? 'Request consultation' : 'Book a consultation'}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
                <div className={styles.footerInner}>
                    <div className={styles.copyright}>
                        © {currentYear} {companyName} Ltd. All rights reserved.
                    </div>
                    <div className={styles.legal}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/cookies">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
