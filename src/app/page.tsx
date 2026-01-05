import Link from 'next/link';
import { getSortedPosts, formatDate } from '@/lib/posts';

// Sample posts if none exist yet
const samplePosts = [
    {
        slug: 'finding-culturally-sensitive-therapist',
        title: 'How to Find a Culturally Sensitive Therapist',
        date: '2024-12-15',
        excerpt: 'A guide for adults from ethnic minorities on finding a therapist who truly understands your experiences.',
        category: 'Therapy',
    },
    {
        slug: 'antiracism-workplace-beyond-training',
        title: 'Anti-Racism in the Workplace: Beyond One-Off Training',
        date: '2024-11-28',
        excerpt: 'Why single awareness sessions rarely create change, and what organisations can do instead.',
        category: 'EDI',
    },
    {
        slug: 'workplace-health-screening-benefits',
        title: 'The Hidden Benefits of Workplace Health Screenings',
        date: '2024-11-10',
        excerpt: 'How on-site health checks can reach staff who might otherwise miss important health conversations.',
        category: 'Wellbeing',
    },
];

export default function BlogHomePage() {
    const posts = getSortedPosts();
    const displayPosts = posts.length > 0 ? posts : samplePosts;

    return (
        <>
            <section className="blog-hero">
                <div className="container">
                    <h1>Salowal Blog</h1>
                    <p>
                        Insights on culturally sensitive therapy, anti-racism, EDI, and
                        workplace wellbeing.
                    </p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="posts-grid">
                        {displayPosts.map((post) => (
                            <article key={post.slug} className="post-card">
                                <div className="post-card-image">📝</div>
                                <div className="post-card-content">
                                    <div className="post-card-meta">
                                        <span>{post.category}</span> • <span>{formatDate(post.date)}</span>
                                    </div>
                                    <h3>
                                        <Link href={`/${post.slug}`}>{post.title}</Link>
                                    </h3>
                                    <p>{post.excerpt}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {posts.length === 0 && (
                        <div style={{
                            textAlign: 'center',
                            padding: '2rem',
                            background: 'var(--aqua-soft)',
                            borderRadius: 'var(--radius-lg)',
                            marginBottom: '2rem'
                        }}>
                            <p style={{ margin: 0 }}>
                                <strong>Sample posts above.</strong> Add your own posts through Decap CMS at{' '}
                                <Link href="/admin">/admin</Link>
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
