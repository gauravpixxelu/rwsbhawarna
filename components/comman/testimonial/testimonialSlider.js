import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialStyle from './testimonial.module.css';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';


const testimonaialContent = [
    {
        id: 1,
        name: 'Aadhya Chaturvedi',
        review: 'In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made.',
        rating: '/images/homepage/rating.svg',
    },
    {
        id: 2,
        name: 'Aadhya Chaturvedi',
        review: 'In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made.',
        rating: '/images/homepage/rating.svg',
    },
    {
        id: 3,
        name: 'Aadhya Chaturvedi',
        review: 'In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made.',
        rating: '/images/homepage/rating.svg',
    },
    {
        id: 4,
        name: 'Aadhya Chaturvedi',
        review: 'In my experience all the teachers are very supportive and friendly and the placement process has been very smooth throughout. I would always be very grateful for the lifelong connections I made.',
        rating: '/images/homepage/rating.svg',
    }
];

const TestimonialSlider = () => {

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />
    };

    const NextArrow = (props) => (
        <div className={TestimonialStyle.next_arrow} onClick={props.onClick}>
            <ArrowRight />
        </div>
    );

    const PrevArrow = (props) => (
        <div className={TestimonialStyle.prev_arrow} onClick={props.onClick}>
            <ArrowLeft />
        </div>
    );


    return (
        <>
            <Slider className={TestimonialStyle.testimonials} {...settings}>
                {testimonaialContent.map((testimonaialContent) => (
                    <div className={TestimonialStyle.testimonial_box} key={testimonaialContent.id}>
                        <p>{testimonaialContent.review}</p>
                        <p className={TestimonialStyle.testimonial_name}>{testimonaialContent.name}</p>
                        <Image
                            src={testimonaialContent.rating}
                            alt="Icons"
                            width={145}
                            height={20}
                        />
                    </div>
                ))}
            </Slider>
        </>
    )
}


export default TestimonialSlider