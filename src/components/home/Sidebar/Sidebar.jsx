import { WEATHER_DATA } from '../../../constants/data';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Today's Update Widget */}
      <div className="widget-today">
        <div className="widget-today__icon">📰</div>
        <h3 className="widget-today__title">মিরপুরে আজকের আবহাওয়া</h3>
        <p className="widget-today__subtitle">সর্বশেষ আপডেট</p>
      </div>

      {/* Weather Widget */}
      <div className="widget-weather">
        <div className="widget-weather__header">
          <div style={{ fontSize: '32px', marginBottom: '4px' }}>🌤️</div>
          <div className="widget-weather__temp">{WEATHER_DATA.temperature}</div>
          <div className="widget-weather__condition">{WEATHER_DATA.condition}</div>
        </div>
        <div className="widget-weather__details">
          <div className="widget-weather__detail">
            <div className="widget-weather__detail-label">আদ্রতা</div>
            <div className="widget-weather__detail-value">{WEATHER_DATA.humidity}</div>
          </div>
          <div className="widget-weather__detail">
            <div className="widget-weather__detail-label">সূর্যোদয়</div>
            <div className="widget-weather__detail-value">{WEATHER_DATA.pressure}</div>
          </div>
          <div className="widget-weather__detail">
            <div className="widget-weather__detail-label">বাতাস</div>
            <div className="widget-weather__detail-value">{WEATHER_DATA.wind}</div>
          </div>
        </div>
      </div>

      {/* Quote Widget */}
      <div className="widget-quote">
        <p className="widget-quote__text">
          মিরপুরের উন্নয়ন মিরপুরের মানুষের হাতে
        </p>
        <p className="widget-quote__source">— মিরপুরবাসী</p>
      </div>

      {/* Nature CTA */}
      <div className="widget-cta">
        <img
          src="/images/tea-garden.jpg"
          alt="মিরপুরের প্রকৃতি"
          className="widget-cta__image"
          loading="lazy"
        />
        <div className="widget-cta__body">
          <h3 className="widget-cta__title">মিরপুরকে আরো সুন্দর করি</h3>
          <p className="widget-cta__subtitle">আমাদের মধ্যমণি দিন →</p>
          <a href="#" className="widget-cta__btn">আমাদের সাথে যোগ দিন</a>
        </div>
      </div>

      {/* Photo Stories */}
      <div className="widget-stories">
        <h3 className="widget-stories__title">মিরপুর ছবিতে কথা বলে</h3>
        <p className="widget-stories__subtitle">ফটো গ্যালারি</p>
        <a href="#" className="widget-stories__btn">গ্যালারি দেখুন →</a>
      </div>
    </aside>
  );
};

export default Sidebar;
