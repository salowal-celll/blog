'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

interface NavItem {
    label: string;
    href: string;
    external?: boolean;
}

interface HeaderProps {
    navItems?: NavItem[];
    ctaText?: string;
    ctaHref?: string;
    variant?: 'main' | 'business' | 'blog';
}

const mainNavItems: NavItem[] = [
    { label: 'Therapy', href: 'https://salowal.com/therapy', external: true },
    { label: 'About', href: 'https://salowal.com/about', external: true },
    { label: 'Assessment', href: 'https://salowal.com/assessment', external: true },
    { label: 'Blog', href: '/' },
    { label: 'For Business', href: 'https://business.salowal.com', external: true },
];

const businessNavItems: NavItem[] = [
    { label: 'Services', href: '/' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'For Individuals', href: 'https://salowal.com', external: true },
];

const blogNavItems: NavItem[] = [
    { label: 'Therapy', href: 'https://salowal.com/therapy', external: true },
    { label: 'About', href: 'https://salowal.com/about', external: true },
    { label: 'Assessment', href: 'https://salowal.com/assessment', external: true },
    { label: 'Blog', href: '/' },
    { label: 'Main Site', href: 'https://salowal.com', external: true },
];

export function Header({
    navItems,
    ctaText,
    ctaHref,
    variant = 'main',
}: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Use provided navItems or default based on variant
    const getNavItems = () => {
        if (navItems) return navItems;
        if (variant === 'business') return businessNavItems;
        if (variant === 'blog') return blogNavItems;
        return mainNavItems;
    };
    const items = getNavItems();
    const cta = ctaText || (variant === 'business' ? 'Make an Enquiry' : 'Book Consultation');
    const ctaLink = ctaHref || (variant === 'business' ? '/enquiry' : 'https://salowal.com/contact');
    const brandName = variant === 'business' ? 'Salowal for Business' : 'Salowal';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.headerInner}>
                <Link href="/" className={styles.brand}>
                    <div className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="Salowal"
                            width={40}
                            height={40}
                            className={styles.logoImg}
                        />
                    </div>
                    <span className={styles.brandName}>{brandName}</span>
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    {items.map((item) => (
                        item.external ? (
                            <a
                                key={item.href}
                                href={item.href}
                                className={styles.navLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={styles.navLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                    <Link
                        href={ctaLink}
                        className={`${styles.navCta} btn btn-primary`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {cta}
                    </Link>
                </nav>

                <div className={styles.mobileActions}>
                    <Link href={ctaLink} className={`btn btn-primary btn-sm ${styles.mobileCta}`}>
                        {cta}
                    </Link>
                    <button
                        className={`${styles.menuBtn} ${isMenuOpen ? styles.menuOpen : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
}
