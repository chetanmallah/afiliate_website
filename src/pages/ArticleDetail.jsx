import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { articles } from '../data/articles';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/articles" className="text-teal-600 hover:text-teal-700">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <article>
        <div className="relative h-96 bg-gray-900">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/articles"
                className="inline-flex items-center text-white mb-6 hover:text-teal-300 transition-colors"
              >
                <ArrowLeft className="mr-2" size={20} />
                Back to Articles
              </Link>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-4 py-1 bg-teal-600 text-white text-sm font-semibold rounded-full">
                  {article.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {article.title}
              </h1>
              <div className="flex items-center text-teal-100 space-x-6">
                <div className="flex items-center">
                  <User size={18} className="mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/articles/${relatedArticle.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full">
                        {relatedArticle.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
