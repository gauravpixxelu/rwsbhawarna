import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoSliderStyle from './logoSlider.module.css';

const logos = [
    {
        id: 1,
        logo: '/images/homepage/council.png',
    },
    {
        id: 2,
        logo: '/images/homepage/council.png',
    },
    {
        id: 3,
        logo: '/images/homepage/council.png',
    },
    {
        id: 4,
        logo: '/images/homepage/council.png',
    },
    {
        id: 5,
        logo: '/images/homepage/council.png',
    },
    {
        id: 6,
        logo: '/images/homepage/council.png',
    },
    {
        id: 7,
        logo: '/images/homepage/council.png',
    }
];

const LogoSlider = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 5000,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0
    };

    return (
        <>
            <Slider className={LogoSliderStyle.logoslider} {...settings}>
                {logos.map((logo) => (
                    <div className={LogoSliderStyle.logoslider_imgs} key={logo.id}>
                        <Image
                            src={logo.logo}
                            alt="Logos"
                            width={400}
                            height={400}
                            style={{ width: '100%', height: 'auto'}}
                        />
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default LogoSlider