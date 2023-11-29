import logo from '../assets/logo-light.svg';
import fb from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'

import '../scss/stylos/footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">

        <div className="footer__wrapper container">

            <div className="footer__logo">
                <img src={logo} alt="" />
            </div>

            <div className="footer__paragraph">
                <p>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
            </div>

            <div className="footer__icons">

                <img src={fb} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />

            </div>

        </div>

    </footer>
  )
}
