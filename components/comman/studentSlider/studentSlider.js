import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StudentSliderStyle from './student.module.css';

const happyfaces = [
    {
        id: 1,
        image: '/images/happyfaces/img1.jpg',
    },
    {
        id: 2,
        image: '/images/happyfaces/img2.jpg',
    },
    {
        id: 3,
        image: '/images/happyfaces/img3.jpg',
    },
    {
        id: 4,
        image: '/images/happyfaces/img4.jpg',
    },
    {
        id: 5,
        image: '/images/happyfaces/img5.jpg',
    },
    {
        id: 6,
        image: '/images/happyfaces/img6.jpg',
    },
    {
        id: 7,
        image: '/images/happyfaces/img7.jpg',
    },
    {
        id: 8,
        image: '/images/happyfaces/img8.jpg',
    },
    {
        id: 9,
        image: '/images/happyfaces/img9.jpg',
    },
    {
        id: 10,
        image: '/images/happyfaces/img10.jpg',
    },
    {
        id: 11,
        image: '/images/happyfaces/img11.jpg',
    }
];

const StudentSlider = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 5000,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
        };

    return (
        <>
            <Slider className={StudentSliderStyle.studentslider} {...settings}>
                {happyfaces.map((happyface) => (
                    <div className={StudentSliderStyle.logoslider_imgs} key={happyface.id}>
                        <Image
                            src={happyface.image}
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

export default StudentSlider