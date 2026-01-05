'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './BlogHeader.module.css';

export function BlogHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerInner}`}>
                <Link href="/" className={styles.brand}>
                    <div className={styles.logo}>
                        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="blogLogoGradient" cx="30%" cy="30%">
                                    <stop offset="0%" stopColor="#b8f2f0" />
                                    <stop offset="60%" stopColor="#77c9a0" />
                                    <stop offset="100%" stopColor="#3a8f6b" />
                                </radialGradient>
                            </defs>
                            <circle cx="18" cy="18" r="16" fill="url(#blogLogoGradient)" />
                        </svg>
                    </div>
                    <div>
                        <span className={styles.brandTitle}>Salowal Blog</span>
                        <span className={styles.brandSub}>Insights & Resources</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                        Articles
                    </Link>
                    <Link href="https://salowal.com" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                        Main Site
                    </Link>
                    <Link
                        href="https://salowal.com/contact"
                        className={`btn btn-primary ${styles.navCta}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Get in Touch
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.menuBtn} ${isMenuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
