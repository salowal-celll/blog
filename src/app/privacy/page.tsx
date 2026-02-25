import { Container } from '@salowal/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Salowal Blog',
    description: 'Salowal Limited privacy policy – how we collect, use, store, and protect your personal data.',
};

export default function PrivacyPage() {
    return (
        <section className="section-white" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
            <Container>
                <div style={{ maxWidth: '780px', margin: '0 auto' }}>
                    <h1>Privacy Policy</h1>
                    <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
                        <strong>Last updated:</strong> 25 February 2026
                    </p>

                    <h2>1. Who We Are</h2>
                    <p>
                        Salowal Limited (&quot;Salowal&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a company registered in England
                        and Wales under company number <strong>13402620</strong>. We provide culturally sensitive therapy,
                        trauma-informed support, EDI training, and workplace wellbeing services. Our registered contact
                        email is <a href="mailto:admin@salowal.com">admin@salowal.com</a>.
                    </p>

                    <h2>2. What Information We Collect</h2>
                    <p>We may collect the following categories of personal data:</p>
                    <ul>
                        <li><strong>Identity data:</strong> first name, last name.</li>
                        <li><strong>Contact data:</strong> email address, telephone number.</li>
                        <li><strong>Enquiry data:</strong> the type of enquiry you submit and any information you choose to share in a message or form.</li>
                        <li><strong>Technical data:</strong> IP address, browser type and version, time zone, operating system, and platform – collected automatically through cookies and analytics tools.</li>
                        <li><strong>Usage data:</strong> pages visited, time spent on pages, and navigation paths.</li>
                    </ul>

                    <h2>3. How We Collect Your Data</h2>
                    <p>We collect data through:</p>
                    <ul>
                        <li>Contact forms and newsletter sign-up forms on our website.</li>
                        <li>Email correspondence.</li>
                        <li>Cookies and similar tracking technologies (see our <a href="/cookies">Cookie Policy</a>).</li>
                    </ul>

                    <h2>4. How We Use Your Information</h2>
                    <p>We use your personal data for the following purposes:</p>
                    <ul>
                        <li>To respond to enquiries and provide our services.</li>
                        <li>To send you relevant wellbeing resources or service updates where you have opted in.</li>
                        <li>To improve our website, content, and user experience.</li>
                        <li>To comply with legal obligations.</li>
                    </ul>

                    <h2>5. Legal Basis for Processing</h2>
                    <p>Under the UK General Data Protection Regulation (UK GDPR), we process your data on the following legal bases:</p>
                    <ul>
                        <li><strong>Consent:</strong> where you have given clear consent (e.g. submitting a contact form or subscribing to resources).</li>
                        <li><strong>Legitimate interests:</strong> where processing is necessary for our legitimate interests (e.g. improving our services), provided your rights do not override those interests.</li>
                        <li><strong>Legal obligation:</strong> where we need to comply with a legal requirement.</li>
                    </ul>

                    <h2>6. Data Sharing</h2>
                    <p>
                        We do not sell your personal data. We may share data with trusted third-party service providers
                        who help us operate our website and deliver our services (e.g. hosting providers, email platforms,
                        analytics tools). All third parties are required to respect the security of your data and process
                        it in accordance with applicable law.
                    </p>

                    <h2>7. Data Retention</h2>
                    <p>
                        We retain personal data only for as long as necessary to fulfil the purposes for which it was
                        collected, or as required by law. Contact form submissions are typically retained for up to 24
                        months unless you request earlier deletion.
                    </p>

                    <h2>8. Data Security</h2>
                    <p>
                        We have implemented appropriate technical and organisational measures to protect your personal
                        data against unauthorised access, alteration, disclosure, or destruction. This includes encrypted
                        connections (SSL/TLS), secure hosting, and restricted access to personal data.
                    </p>

                    <h2>9. Your Rights</h2>
                    <p>Under the UK GDPR, you have the right to:</p>
                    <ul>
                        <li><strong>Access</strong> the personal data we hold about you.</li>
                        <li><strong>Rectify</strong> inaccurate or incomplete data.</li>
                        <li><strong>Erase</strong> your personal data (&quot;right to be forgotten&quot;).</li>
                        <li><strong>Restrict</strong> or <strong>object to</strong> processing of your data.</li>
                        <li><strong>Data portability:</strong> request your data in a structured, machine-readable format.</li>
                        <li><strong>Withdraw consent</strong> at any time where processing is based on consent.</li>
                    </ul>
                    <p>
                        To exercise any of these rights, please contact us at{' '}
                        <a href="mailto:admin@salowal.com">admin@salowal.com</a>. We will respond within 30 days.
                    </p>

                    <h2>10. Third-Party Links</h2>
                    <p>
                        Our website may contain links to external websites. We are not responsible for the privacy
                        practices of those sites and encourage you to read their privacy policies.
                    </p>

                    <h2>11. Changes to This Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. Any changes will be posted on this page
                        with a revised &quot;Last updated&quot; date. We encourage you to review this policy periodically.
                    </p>

                    <h2>12. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy or how we handle your data, please contact us:
                    </p>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:admin@salowal.com">admin@salowal.com</a></li>
                        <li><strong>Company:</strong> Salowal Limited, Company No. 13402620, registered in England and Wales.</li>
                    </ul>
                    <p>
                        You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO)
                        at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
                    </p>
                </div>
            </Container>
        </section>
    );
}
