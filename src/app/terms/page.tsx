import { Container } from '@salowal/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Salowal Blog',
    description: 'Terms of service governing the use of the Salowal Limited website and services.',
};

export default function TermsPage() {
    return (
        <section className="section-white" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
            <Container>
                <div style={{ maxWidth: '780px', margin: '0 auto' }}>
                    <h1>Terms of Service</h1>
                    <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
                        <strong>Last updated:</strong> 25 February 2026
                    </p>

                    <h2>1. Introduction</h2>
                    <p>
                        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the websites, services,
                        and content provided by Salowal Limited (&quot;Salowal&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a company registered
                        in England and Wales under company number <strong>13402620</strong>. By accessing or using our
                        website, you agree to be bound by these Terms. If you do not agree, please do not use our website.
                    </p>

                    <h2>2. Our Services</h2>
                    <p>
                        Salowal provides culturally sensitive therapy, trauma-informed psychological support,
                        self-reflection assessments, EDI (Equality, Diversity and Inclusion) training, anti-racism
                        consultancy, and workplace wellbeing services. Information on our website is provided for general
                        informational purposes and does not constitute medical advice, diagnosis, or treatment.
                    </p>

                    <h2>3. Eligibility</h2>
                    <p>
                        You must be at least 18 years of age to use our services. By using our website, you represent
                        that you meet this requirement. Where services are being arranged for someone under 18, a parent
                        or legal guardian must provide consent.
                    </p>

                    <h2>4. Use of the Website</h2>
                    <p>You agree to use our website only for lawful purposes and in a manner that does not:</p>
                    <ul>
                        <li>Infringe the rights of any third party.</li>
                        <li>Restrict or inhibit any other person&apos;s use or enjoyment of the website.</li>
                        <li>Attempt to gain unauthorised access to any part of the website or its systems.</li>
                        <li>Introduce malicious software, scripts, or code.</li>
                    </ul>

                    <h2>5. Blog Content</h2>
                    <p>
                        The articles, guides, and resources published on this blog are provided for general informational
                        and educational purposes only. They do not constitute professional medical, psychological, or
                        therapeutic advice. Always seek the guidance of a qualified professional for specific concerns.
                    </p>

                    <h2>6. Intellectual Property</h2>
                    <p>
                        All content on this website – including but not limited to text, graphics, logos, images,
                        articles, guides, and branding – is the intellectual property of Salowal Limited
                        unless otherwise stated. You may not reproduce, distribute, modify, or republish any content
                        without our prior written consent.
                    </p>

                    <h2>7. User-Submitted Content</h2>
                    <p>
                        When you submit information through our forms (contact, newsletter sign-up),
                        you confirm that the information you provide is accurate and that you have the right to share it.
                        We process this information in accordance with our <a href="/privacy">Privacy Policy</a>.
                    </p>

                    <h2>8. Third-Party Links</h2>
                    <p>
                        Our website may contain links to external websites or services operated by third parties.
                        We have no control over the content, policies, or practices of those sites and accept no
                        responsibility for them. Accessing third-party links is at your own risk.
                    </p>

                    <h2>9. Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by law, Salowal Limited shall not be liable for any indirect,
                        incidental, special, consequential, or punitive damages arising out of your access to or use
                        of, or inability to access or use, our website or services. While we strive to ensure the
                        accuracy and reliability of the information on our website, we do not warrant that the content
                        is error-free, complete, or up to date.
                    </p>

                    <h2>10. Governing Law</h2>
                    <p>
                        These Terms are governed by and construed in accordance with the laws of England and Wales.
                        Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the
                        courts of England and Wales.
                    </p>

                    <h2>11. Changes to These Terms</h2>
                    <p>
                        We reserve the right to update these Terms at any time. Changes will be effective immediately
                        upon posting to this page. We encourage you to review these Terms periodically. Your continued
                        use of the website following any changes constitutes your acceptance of the revised Terms.
                    </p>

                    <h2>12. Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us:</p>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:admin@salowal.com">admin@salowal.com</a></li>
                        <li><strong>Company:</strong> Salowal Limited, Company No. 13402620, registered in England and Wales.</li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}
