import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActivityStyle from './actvitySlider.module.css';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';


const activity = [
    {
        id: 1,
        image: '/images/homepage/fit-india.jpg',
        title: 'Fit India School',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 2,
        image: '/images/homepage/fit-india.jpg',
        title: 'Fit India School',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 3,
        image: '/images/homepage/fit-india.jpg',
        title: 'Fit India School',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 4,
        image: '/images/homepage/fit-india.jpg',
        title: 'Fit India School',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    }
];

const ActivitySlider = () => {

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <ChevronRight />,
        prevArrow: <ChevronLeft />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
            <Slider className={ActivityStyle.activity} {...settings}>
                {activity.map((activity) => (
                    <div className={ActivityStyle.activity_box} key={activity.id}>
                        <Image
                            src={activity.image}
                            alt="Icons"
                            width={400}
                            height={400}
                            style={{ width: '100%', height: 'auto'}}
                        />
                        <h6>{activity.title}</h6>
                        <p className={ActivityStyle.testimonial_name}>{activity.text}</p>                        
                    </div>
                ))}
            </Slider>
        </>
    )
}


export default ActivitySlider