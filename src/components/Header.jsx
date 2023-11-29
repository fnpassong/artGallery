import { Link } from 'react-router-dom';
import imgMobile from '../assets/mobile/image-hero@2x.jpg';
import imgTablet from '../assets/tablet/image-hero@2x.jpg';
import imgDesktop from '../assets/desktop/image-hero@2x.jpg';

import arrowRight from '../assets/icon-arrow-right.svg';
import { Boton } from './Boton';

import '../scss/stylos/header.scss';



export const Header = () => {
/***********OBJETO PARA EL BOTON**********/
    const dato = 
    {
        texto:'our location',
        icon : arrowRight,
    }
    
/********FIN OBJETO PARA EL BOTON**********/

  return (
    <section className="header">
        {/* sólo visible en desktop */}
        <div className='header__dark'></div>
       

        <picture className="header__picture">
            <source srcSet= {imgDesktop} media= '(min-width: 70rem)' />
            <source srcSet= {imgTablet} media= '(min-width: 48rem)' />
            <img src= {imgMobile} alt="" />
        </picture>

        <div className="header__text container">

            <div className="header__title">
                <h1 className="header__h1">modern art gallery</h1>
            </div>

            <div className="header__paragraph">
                <p className="header__p">The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
            </div>  

            <div className="header__button">
                <Link to ='/location'>
                 <Boton datero = {dato}  />
                </Link>
            </div> 

        </div>

    </section>
  )
}
