import ContactInfo from "../ContactInfo/ContactInfo";
import CreatorInfo from "../CreatorInfo/CreatorInfo";
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__divider' />
      <ContactInfo />
      <div className='footer__divider' />
      <CreatorInfo />
    </footer>
  );
}

export default Footer;
