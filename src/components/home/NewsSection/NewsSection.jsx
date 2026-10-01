import { HELLO_NEWS } from '../../../constants/data';
import { FiCalendar, FiEye } from 'react-icons/fi';

const NewsSection = () => {
  const featured = HELLO_NEWS.find((n) => n.featured);
  const smallNews = HELLO_NEWS.filter((n) => !n.featured);

  return (
    <div className="news-main">
      <div className="section-header">
        <h2 className="section-header__title">হ্যালো নবীগঞ্জ</h2>
      </div>
      <div className="news-grid">
        {/* Featured news */}
        <div className="news-featured">
          <div className="news-featured__card">
            <div className="news-featured__image-wrapper">
              <img
                src={featured.image}
                alt={featured.title}
                className="news-featured__image"
                loading="lazy"
              />
              <div className="news-featured__overlay">
                <span className="news-featured__overlay-tag">নবীগঞ্জে আপনাকে স্বাগতম</span>
              </div>
            </div>
            <div className="news-featured__body">
              <h3 className="news-featured__title">{featured.title}</h3>
              <p className="news-featured__excerpt">{featured.excerpt}</p>
              <div className="news-featured__meta">
                <span><FiCalendar /> {featured.date}</span>
                <span><FiEye /> {featured.views}</span>
              </div>
              <a href="#" className="news-featured__read-more">
                বিস্তারিত পড়ুন →
              </a>
            </div>
          </div>
        </div>

        {/* Small news cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {smallNews.map((news) => (
            <div key={news.id} className="news-small">
              <div className="news-small__image-wrapper">
                <img
                  src={news.image}
                  alt={news.title}
                  className="news-small__image"
                  loading="lazy"
                />
              </div>
              <div className="news-small__body">
                <h4 className="news-small__title">{news.title}</h4>
                <div className="news-small__meta">
                  <span><FiCalendar /> {news.date}</span>
                  <span><FiEye /> {news.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
