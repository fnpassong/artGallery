import imgMobile from '../assets/mobile/image-grid-2@2x.jpg';
import imgTablet from '../assets/tablet/image-grid-2@2x.jpg';
import imgDesktop from '../assets/desktop/image-grid-2@2x.jpg';

import imgMobile2 from '../assets/mobile/image-grid-3@2x.jpg';
import imgTablet2 from '../assets/tablet/image-grid-3@2x.jpg';
import imgDesktop2 from '../assets/desktop/image-grid-3@2x.jpg';

import '../scss/stylos/gallery2Pics.scss';

export const Gallery2Pics = () => {
  return (
    <section className="gallery2Pics container">

         <div className="gallery2Pics__grid">

            <picture className='big'>

              <source srcSet= {imgDesktop} media='(min-width:70rem)' />
              <source srcSet= {imgTablet} media='(min-width:48rem)' />
              <img src= {imgMobile} alt="" />

            </picture>

            <picture className='small'>

              <source srcSet= {imgDesktop2} media='(min-width:70rem)' />
              <source srcSet= {imgTablet2} media='(min-width:48rem)' />
              <img src= {imgMobile2} alt="" />

            </picture>

            <div className="gallery2Pics__text">

              <div className="gallery2Pics__title">
                <h3>COME & BE <span>INSPIRED</span> </h3>
              </div>

              <div className="gallery2Pics__paragraph">
                <p>We’re excited to welcome you to our gallery and see how our collections influence you.</p>
              </div>

            </div>



         </div>


    </section>
  )
}
