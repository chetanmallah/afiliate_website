import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';
import AnimatedSection from '../components/AnimatedSection';
import { WaveDivider } from '../components/SvgDividers';

export default function Articles() {
  const categories = ['All', ...new Set(articles.map((article) => article.category))];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-white via-teal-50 to-blue-50 pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in-up">
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
              Expert Insights & Guides
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-200">
            Articles & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Expert insights, strategies, and tips to help you succeed in e-commerce
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-3 mb-16">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="px-6 py-2.5 rounded-full border-2 border-gray-200 hover:border-teal-600 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200 font-semibold text-sm hover:scale-105 hover:shadow-md"
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <article
                    key={article.id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 bg-teal-600 text-white text-xs font-bold rounded-full shadow-lg">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1.5" />
                          {new Date(article.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center">
                          <User size={14} className="mr-1.5" />
                          {article.author}
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2 leading-tight">
                        {article.title}
                      </h2>

                      <p className="text-gray-600 mb-5 line-clamp-3 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>

                      <Link
                        to={`/articles/${article.slug}`}
                        className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 transition-colors text-sm"
                      >
                        Read Full Article
                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="py-24 bg-gradient-to-br from-teal-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djRoLTR2LTRoNHptMCAwdi00aDR2NGgtNHptLTQgNHY0aC00di00aDR6bTAgMHYtNGg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="w-full relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl text-teal-50 mb-8">
              Get expert tips and strategies delivered to your inbox
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Subscribe for Updates
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
