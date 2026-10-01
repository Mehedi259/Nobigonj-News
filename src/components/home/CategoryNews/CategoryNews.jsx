import { NATIONAL_NEWS, ENTERTAINMENT_NEWS, SPORTS_NEWS } from '../../../constants/data';

const CategoryColumn = ({ title, news, seeAllText = 'সব খবর →' }) => (
  <div className="category-column">
    <div className="category-tabs">
      <span className="category-tab category-tab--active">{title}</span>
      <span className="category-tab__see-all">{seeAllText}</span>
    </div>
    {news.map((item) => (
      <div key={item.id} className="category-card">
        <div className="category-card__image-wrapper">
          <img
            src={item.image}
            alt={item.title}
            className="category-card__image"
            loading="lazy"
          />
        </div>
        <div className="category-card__body">
          <h3 className="category-card__title">{item.title}</h3>
          {item.bullets && (
            <ul className="category-card__bullets">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}
  </div>
);

const CategoryNews = () => {
  return (
    <section className="category-section" id="national">
      <div className="container">
        <div className="category-grid">
          <CategoryColumn title="জাতীয়" news={NATIONAL_NEWS} />
          <CategoryColumn title="বিনোদন" news={ENTERTAINMENT_NEWS} />
          <CategoryColumn title="খেলাধুলা" news={SPORTS_NEWS} />
        </div>
      </div>
    </section>
  );
};

export default CategoryNews;
