import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PressSldierStyle from './pressslider.module.css';

const press = [
    {
        id: 1,
        image: '/images/press/press1.png',
    },
    {
        id: 2,
        image: '/images/press/press2.png',
    },
    {
        id: 3,
        image: '/images/press/press3.png',
    },
    {
        id: 4,
        image: '/images/press/press4.png',
    },
    {
        id: 5,
        image: '/images/press/press5.png',
    },
    {
        id: 6,
        image: '/images/press/press6.png',
    }
];

const PressSlider = () => {

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };

    return (
        <>
            <Slider className={PressSldierStyle.studentslider} {...settings}>
                {press.map((press) => (
                    <div className={PressSldierStyle.logoslider_imgs} key={press.id}>
                        <Image
                            src={press.image}
                            alt="Happy Faces"
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

export default PressSlider