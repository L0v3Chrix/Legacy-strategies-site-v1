import Link from 'next/link';

interface FeaturedArticlesProps {
  articles: { title: string; excerpt: string; slug: string }[];
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ articles }) => {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-navy">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {articles.map((article, index) => (
            <Link href={`/blog/${article.slug}`} key={index}>
              <div className="bg-cream p-8 rounded-lg shadow-md cursor-pointer">
                <h3 className="font-serif text-2xl font-bold text-navy">{article.title}</h3>
                <p className="font-sans text-lg text-navy mt-4">{article.excerpt}</p>
                <p className="font-sans text-lg text-gold mt-4">Read More</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;