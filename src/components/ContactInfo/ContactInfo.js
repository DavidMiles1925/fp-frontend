import { contactInfo } from "../../utils/constants";
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <div className='contact'>
      <h3 className='contact__title'>Contact Us</h3>
      <div className='contact__wrapper'>
        <div className='contact__header-wrapper'></div>
        <div className='contact__info-wrapper'>
          <p className='contact__header'>Address:</p>
          <div className='contact__address-wrapper contact__header_type_address'>
            <p className='contact__info-item'>{contactInfo.ADDRESS}</p>
            <p className='contact__info-item'>{`${contactInfo.CITY}, ${contactInfo.STATE} ${contactInfo.ZIP}`}</p>
          </div>
        </div>
        <div className='contact__info-wrapper'>
          <p className='contact__header'>Phone:</p>
          <p className='contact__info-item'>{contactInfo.PHONE_MAIN}</p>
        </div>
        <div className='contact__info-wrapper'>
          <p className='contact__header'>Email:</p>
          <p className='contact__info-item'>{contactInfo.EMAIL}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
