import TopBar from './components/common/Header/TopBar';
import Navbar from './components/common/Navbar/Navbar';
import HeroBanner from './components/home/HeroBanner/HeroBanner';
import StatsSection from './components/home/StatsSection/StatsSection';
import TopPlaces from './components/home/TopPlaces/TopPlaces';
import NewsSection from './components/home/NewsSection/NewsSection';
import Sidebar from './components/home/Sidebar/Sidebar';
import CategoryNews from './components/home/CategoryNews/CategoryNews';
import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <div className="app">
      <TopBar />
      <Navbar />
      <main>
        <HeroBanner />
        <StatsSection />
        <TopPlaces />
        <section className="news-section" id="hello-mirpur">
          <div className="container">
            <NewsSection />
            <Sidebar />
          </div>
        </section>
        <CategoryNews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
