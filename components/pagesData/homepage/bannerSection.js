import React from 'react';
import Image from 'next/image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeCss from './home.module.css';



const VideoSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    cssEase: 'ease-in-out', 
  };
  

  return (
    <section className={`${HomeCss.banner_sec} banner-slider`}>
      <div className={HomeCss.video_container}>
        <Slider {...settings}>
          <div>
            <div className={HomeCss.imagesbanner}>
              <Image
                src="/images/overview/dummy-img.jpg"
                alt="Logos"
                width={800}
                height={800}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div>
            <div className={HomeCss.imagesbanner}>
              <Image
                src="/images/overview/dummy-img.jpg"
                alt="Logos"
                width={800}
                height={800}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div>
            <div className={HomeCss.imagesbanner}>
              <Image
                src="/images/overview/dummy-img.jpg"
                alt="Logos"
                width={800}
                height={800}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </Slider>
        <h2 className={HomeCss.banner_txt}>Rainbow World School</h2>
      </div>
    </section>
  );
};

export default VideoSlider;