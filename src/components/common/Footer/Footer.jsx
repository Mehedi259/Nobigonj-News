import { FOOTER_LINKS } from '../../../constants/data';
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Brand Column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-icon">হে</div>
            <div className="footer__logo-text">
              <h3>Hello Mirpur</h3>
              <p>মিরপুরের মানুষ, মিরপুরের গল্প</p>
            </div>
          </div>
          <p className="footer__description">
            মিরপুরের সব খবর, মানুষের গল্প, ইতিহাস, ঐতিহ্য ও উন্নয়নের হাতে – সব এক প্ল্যাটফর্মে।
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__column">
          <h4>দ্রুত লিংক</h4>
          <ul>
            {FOOTER_LINKS.quickLinks.map((link, i) => (
              <li key={i}><a href={link.href}>› {link.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Info Links */}
        <div className="footer__column">
          <h4>তথ্য ও সহায়তা</h4>
          <ul>
            {FOOTER_LINKS.infoLinks.map((link, i) => (
              <li key={i}><a href={link.href}>› {link.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__newsletter">
          <h4>নিউজলেটার সাবস্ক্রাইব করুন</h4>
          <p>মিরপুরের তাজাতম্ম খবর ও আপডেট ইমেইল পেতে</p>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="আপনার ইমেইল লিখুন" />
            <button type="submit">সাবস্ক্রাইব</button>
          </form>
          <div className="footer__heart-badge">
            <span>Mirpur</span> Always in Our Hearts ♡
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="container">
          <p>© ২০২৬ Hello Mirpur. সর্বস্বত্ব সংরক্ষিত।</p>
          <p>মিরপুরের মানুষ, মিরপুরের কথা। | Made with ❤️ for Mirpur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
