import imgOneMobile from '../assets/mobile/image-grid-1@2x.jpg';
import imgOneTablet from '../assets/tablet/image-grid-1@2x.jpg';
import imgOneDesktop from '../assets/desktop/image-grid-1@2x.jpg';


import '../scss/stylos/gallery.scss';

export const Gallery = () => {
  return (
    <section className="gallery container">
      
      <div className="gallery__flex">

        <picture>
          <source srcSet= {imgOneDesktop} media= '(min-width: 70rem)' />
          <source srcSet= {imgOneTablet}  media= '(min-width: 48rem)' />
          <img src= {imgOneMobile} alt="" />
        </picture>

        <div className="gallery__text">

          <div className="gallery__title">
            <h3>your day <span>at the gallery</span> </h3>
          </div>

          <div className="gallery__paragraph">
            <p>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}
