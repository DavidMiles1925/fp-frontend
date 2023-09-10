import {
  ABOUT_US_OUR_PLEDGE,
  ABOUT_US_WHAT_WE_DO,
  ABOUT_US_WHERE_WE_CAME_FROM,
} from "../../utils/constants";
import "./AboutUs.css";
import about_us_ben from "../../images/about_us_ben.jpg";
import about_us_dad from "../../images/about_us_dad.jpg";

function AboutUs() {
  return (
    <section className='about-us'>
      <div className='about-us__sidebar'>
        <h2 className='about-us__title'>About Us</h2>
      </div>
      <div className='about-us__wrapper'>
        <div className='about-us__picture-wrapper'>
          <img className='about-us__picture' src={about_us_ben} alt='Ben' />
          <img className='about-us__picture' src={about_us_dad} alt='Ben' />
        </div>
        <div className='about-us__section-container'>
          <h3 className='about-us__section-title'>What we do:</h3>
          <p className='about-us__section-text'>{ABOUT_US_WHAT_WE_DO}</p>
        </div>
        <div className='about-us__section-container'>
          <h3 className='about-us__section-title'>Where we came from:</h3>
          <p className='about-us__section-text'>
            {ABOUT_US_WHERE_WE_CAME_FROM}
          </p>
        </div>
        <div className='about-us__section-container'>
          <h3 className='about-us__section-title'>Our pledge to you:</h3>
          <p className='about-us__section-text'>{ABOUT_US_OUR_PLEDGE}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
