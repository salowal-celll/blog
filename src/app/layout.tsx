import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/globals.css';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://salowal-blog.netlify.app'),
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
        url: 'https://salowal-blog.netlify.app',
        siteName: 'Salowal Blog',
    },
    alternates: {
        canonical: 'https://salowal-blog.netlify.app',
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
                <Header variant="blog" />
                <main>{children}</main>
                <Footer variant="main" />

                {/* Salowal Blog Google Analytics (G-T4J7GFNEDX) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-T4J7GFNEDX"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics-blog" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-T4J7GFNEDX');
                    `}
                </Script>

                {/* Tidio Live Chat */}
                <Script
                    src="//code.tidio.co/zlq59oinmnngpzpuutlhetnf5nty4reg.js"
                    strategy="lazyOnload"
                />
            </body>
        </html>
    );
}
