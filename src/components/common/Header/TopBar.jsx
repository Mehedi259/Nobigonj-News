import { getBengaliDate } from '../../../utils/helpers';
import { MARQUEE_TEXT } from '../../../constants/data';
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FiMoon, FiSearch } from 'react-icons/fi';

const TopBar = () => {
  const currentDate = getBengaliDate();

  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar__left">
          <div className="top-bar__marquee">
            <span>{MARQUEE_TEXT}</span>
          </div>
        </div>
        <div className="top-bar__right">
          <span className="top-bar__date">{currentDate}</span>
          <div className="top-bar__socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
          </div>
          <div className="top-bar__actions">
            <button aria-label="Dark Mode"><FiMoon /> ডার্ক</button>
            <button aria-label="Search"><FiSearch /> সার্চ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
