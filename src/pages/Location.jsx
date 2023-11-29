import { Link } from 'react-router-dom';
import mapMobile from '../assets/mobile/image-map@2x.png';
import mapTablet from '../assets/tablet/image-map@2x.png';
import mapDesktop from '../assets/desktop/image-map@2x.png';

import leftArrow from '../assets/icon-arrow-left.svg';
import { Footer } from '../components/Footer';
import { Boton } from '../components/Boton';

import '../scss/stylos/location.scss';

export const Location = () => {

  const datazo = {

    texto : 'back to home',
    icon: leftArrow,

  }

  return (
    <>

      <section className="map">

      <div className="map__wrapper">

        <picture>
          <source srcSet= {mapDesktop} media= '(min-width:70rem)'  />
          <source srcSet= {mapTablet} media= '(min-width:48rem)'  />
          <img src={mapMobile} alt="" />
        </picture>

        
        
          <div className="prueba">
            <Link to= '/'>
               <Boton datero = {datazo} />
            </Link>
          </div>
        


      </div>

      <div className="map__location">

        <div className="map__wrapper container">
          <div className="map__title">
            <h3>our location</h3>
          </div>
          <div className="map__theWrapper">
            <div className="map__subTitle">
              <h4>99 king street</h4>
            </div>

            <div className="map__address">
              <p>Newport <span>RI 02840</span> 
              <span>United States of America</span> 
              </p>
            </div>

            <div className="map__paragraph">
              <p>Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
            </div>

          </div>


          
        </div>

      </div>

      </section>
        <div className="newColor">


          <Footer />

        </div>
      

    </>
  )
}
