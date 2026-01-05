import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Script from 'next/script';
import '@salowal/ui/styles';
import './globals.css';
import { BlogHeader } from './BlogHeader';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://blog.salowal.com'),
    title: {
        default: 'Salowal Blog | Mental Health, EDI & Workplace Wellbeing',
        template: '%s | Salowal Blog',
    },
    description:
        'Insights on culturally sensitive therapy, anti-racism, EDI, and workplace wellbeing from Salowal Ltd.',
    keywords: [
        'mental health blog',
        'EDI articles',
        'anti-racism workplace',
        'therapy insights',
        'workplace wellbeing',
    ],
    openGraph: {
        type: 'website',
        locale: 'en_GB',
        url: 'https://blog.salowal.com',
        siteName: 'Salowal Blog',
    },
    alternates: {
        canonical: 'https://blog.salowal.com',
    },
};

export const viewport: Viewport = {
    themeColor: '#77c9a0',
    width: 'device-width',
    initialScale: 1,
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <BlogHeader />
                <main>{children}</main>
                <footer className="blog-footer">
                    <div className="container">
                        <p>© {new Date().getFullYear()} Salowal Ltd. All rights reserved.</p>
                        <nav>
                            <Link href="https://salowal.com">Main Website</Link>
                            <Link href="https://salowal.com/therapy">Therapy</Link>
                            <Link href="https://salowal.com/contact">Contact</Link>
                        </nav>
                    </div>
                </footer>

                {/* Tidio Live Chat */}
                <Script
                    src="//code.tidio.co/zlq59oinmnngpzpuutlhetnf5nty4reg.js"
                    strategy="lazyOnload"
                />
            </body>
        </html>
    );
}
