import aboutImg from 'assets/images/about-img.png'
import './styles.css'

const About = () => {
   return (
      <section className='about'>
         <div className='container'>
            <div className='about-content'>
               <div className='about-img'>
                  <img src={aboutImg} alt='img' />
               </div>
               <div className='about-desc'>
                  <h3 className='about-title'>MOVIESinfo</h3>
                  <p className='about-text'>
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                     eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                     montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                     eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                     fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                     imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
                     pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                     vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                     eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                     amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                     massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                     ridiculus mus. Donec quam felis, ultricies nec, pellentesq nulla ut metus
                     varius laoreet.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
