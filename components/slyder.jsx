import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/slyder.module.css'
import slyde1 from '../public/images/sliders/1.jpg'
import slyde2 from '../public/images/sliders/2.jpg'

const slyder = () => {
    return (
        <>
        <Slider className="flex flex-wrap">
        <div className={`${styles.SlydeModify}`}>
            <Image src={slyde1 } className="box" alt="slyde1"/>
            <div className="container">
            <div className="row">
              <div className={`${styles.slideContent}`}>
                  <h2>We Run All Kinds Of IT Services That Vow Your Success</h2>
                  <p>We are experienced professionals who understand that It services is
                    changing,
                    and are true partners who care about your success. Our team provides a consultative approach on
                    emerging technology.</p>
                  <a href="#" className="bg-green-500 hover:bg-gray-700 text-white font-bold py-4 px-4 ">
                    <span>More About Us</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                  <a href="projects-grid.html" className="bg-white hover:bg-gray-700 text-gray-700 hover:text-white font-bold py-4 px-4 ml-4">Our Services</a>
                {/* <!-- /.slide-content --> */}
              </div>
              {/* <!-- /.col-xl-7 --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </div>
        {/* <!-- /.slide-item --></Slider> */}
          <div className={`${styles.SlydeModify}`}>
          <Image src={slyde2 } className="bg-blend-color" alt="slyde2" />

          <div className="container">
            <div className="row">
                <div className={`${styles.slideContent}`}>
                  <h2 >Keep Business Safe And Ensure High Availability.</h2>
                  <p>We are experienced professionals who understand that It services is
                    changing,
                    and are true partners who care about your success. Our team provides a consultative approach on
                    emerging technology.</p>
                  <a href="#" class="btn btn__primary btn__icon mr-30">
                    <span>More About Us</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                  <a href="projects-grid.html" class="btn btn__white">Our Services</a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        </>
    )
}

export default slyder;