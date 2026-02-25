import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy | Salowal Blog',
    description: 'Salowal Limited cookie policy – how we use cookies and similar technologies on our website.',
};

export default function CookiesPage() {
    return (
        <section className="section-white" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
            <div className="container">
                <div style={{ maxWidth: '780px', margin: '0 auto' }}>
                    <h1>Cookie Policy</h1>
                    <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
                        <strong>Last updated:</strong> 25 February 2026
                    </p>

                    <h2>1. What Are Cookies?</h2>
                    <p>
                        Cookies are small text files that are placed on your device (computer, tablet, or mobile phone)
                        when you visit a website. They are widely used to make websites work efficiently, provide a
                        better user experience, and supply information to website owners.
                    </p>

                    <h2>2. How We Use Cookies</h2>
                    <p>
                        Salowal Limited (&quot;Salowal&quot;, &quot;we&quot;, &quot;us&quot;) uses cookies and similar technologies on our
                        website for the following purposes:
                    </p>

                    <h3>2.1 Strictly Necessary Cookies</h3>
                    <p>
                        These cookies are essential for the website to function correctly. They enable core features
                        such as page navigation, access to secure areas, and form submissions. The website cannot
                        function properly without these cookies.
                    </p>

                    <h3>2.2 Analytics Cookies</h3>
                    <p>
                        These cookies help us understand how visitors interact with our website by collecting and
                        reporting information anonymously. This data helps us improve the structure, content, and
                        performance of our site.
                    </p>

                    <h3>2.3 Functional Cookies</h3>
                    <p>
                        These cookies enable enhanced functionality and personalisation, such as remembering your
                        preferences. They may be set by us or by third-party providers whose services we have
                        integrated into our pages.
                    </p>

                    <h2>3. Third-Party Cookies</h2>
                    <p>
                        Some cookies are placed by third-party services that appear on our pages. We do not control
                        the setting of these cookies. Third-party services we may use include:
                    </p>
                    <ul>
                        <li><strong>Google Analytics</strong> – for website analytics and performance monitoring.</li>
                        <li><strong>Netlify</strong> – for hosting, form handling, and content delivery.</li>
                    </ul>

                    <h2>4. Managing Your Cookies</h2>
                    <p>
                        You can control and manage cookies in several ways. Please note that removing or blocking
                        cookies may impact your user experience and parts of the website may no longer be fully
                        accessible or function as intended.
                    </p>
                    <h3>Browser Settings</h3>
                    <p>
                        Most web browsers allow you to manage cookie preferences through their settings. You can
                        set your browser to refuse cookies or to alert you when cookies are being sent. Instructions
                        for managing cookies in common browsers:
                    </p>
                    <ul>
                        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                        <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                    </ul>

                    <h2>5. Changes to This Cookie Policy</h2>
                    <p>
                        We may update this Cookie Policy from time to time to reflect changes in our practices or for
                        other operational, legal, or regulatory reasons. The &quot;Last updated&quot; date at the top of this page
                        will be revised accordingly.
                    </p>

                    <h2>6. Contact Us</h2>
                    <p>
                        If you have any questions about our use of cookies, please contact us:
                    </p>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:admin@salowal.com">admin@salowal.com</a></li>
                        <li><strong>Company:</strong> Salowal Limited, Company No. 13402620, registered in England and Wales.</li>
                    </ul>
                    <p>
                        For more information about cookies and your rights, visit the Information Commissioner&apos;s
                        Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}
