import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs, formatDate } from '@/lib/posts';
import { BookConsultationCTA } from '@/components/BookConsultationCTA';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author || 'Salowal Team'],
        },
    };
}

export default async function PostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <section className="post-header">
                <div className="container">
                    <Link href="/" className="back-link">
                        ← Back to all posts
                    </Link>
                    <div className="post-meta">
                        {post.category} • {formatDate(post.date)} • By {post.author}
                    </div>
                    <h1>{post.title}</h1>
                </div>
            </section>

            <article className="post-content">
                {post.content ? (
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                ) : (
                    <div style={{
                        padding: '2rem',
                        background: 'var(--aqua-soft)',
                        borderRadius: 'var(--radius-lg)',
                        textAlign: 'center'
                    }}>
                        <p><strong>This is a sample post.</strong></p>
                        <p>
                            Create real content through Decap CMS at{' '}
                            <Link href="/admin">/admin</Link>
                        </p>
                    </div>
                )}
            </article>

            {/* Book Consultation CTA after every post */}
            <div className="container">
                <BookConsultationCTA />
            </div>
        </>
    );
}

