import { TOP_PLACES } from '../../../constants/data';

const TopPlaces = () => {
  return (
    <section className="top-places">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title">মিরপুরের সেরা স্থানসমূহ</h2>
          <a href="#" className="section-header__link">সব দেখুন →</a>
        </div>
        <div className="top-places__grid">
          {TOP_PLACES.map((place) => (
            <div key={place.id} className="place-card">
              <div className="place-card__image-wrapper">
                <img
                  src={place.image}
                  alt={place.title}
                  className="place-card__image"
                  loading="lazy"
                />
              </div>
              <div className="place-card__body">
                <h3 className="place-card__title">{place.title}</h3>
                <p className="place-card__location">{place.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPlaces;
