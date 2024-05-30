import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialStyle from './testimonial.module.css';
import { ChevronRight, ChevronLeft, Quote } from 'react-bootstrap-icons';

const testimonaialContent = [
   
    {
        id: 1,
        name: 'Anjana',
        review: 'At Rainbow World School , dreams take flight  where curiosity shines like stars at night, with dedicated teachers and a caring crew, their school community becomes strong and true.',
        rating: '/images/homepage/rating.svg',
    },
    {
        id: 2,
        name: 'Meenakshi',
        review: 'RAINBOW SCHOOL is doing excellent in all the fields especially giving a lot of exposure to my child. Good efforts by all teachers. I am very thankful to all teachers and staff for its endless efforts. Very happy with the kind of activities organised in the school in all spheres. I feel that my decision was right in sending ANAISHA BHARDWAJ Class Nursery Lotus to this school . I wish a great success to RAINBOW WORLD SCHOOL',
        rating: '/images/homepage/rating.svg',
    },
    {
        id: 3,
        name: 'Harbans Lal',
        review: 'It is a privilege to share my views of how pleased I am with the standard of Education being imparted in Rainbow World School, Bhawarna. The curriculum,the diversified teaching methods ,proper set of  extra curricular activities, as well as the disciplined structure of teaching is so impressive and unbeatable. Thanks to the whole team for providing quality education to my ward, providing all means for the overall development of my ward. You proved "Learning is a Treasure".',
        rating: '/images/homepage/rating.svg',
    },
    {
        id: 4,
        name: 'Swarna Patial',
        review: 'Rainbow World School is showing excellence in all the fields especially in giving a lot of exposure to the children in a nicely planned and organized Academic Programs .Good efforts are being put by all the teachers . I am very grateful to all the Teachers , Coordinators and the Principal .My children are grooming very well.I feel that my decision was right in choosing  Rainbow World School for my children. Keep it up ! I wish a great success  to Rainbow World School .',
        rating: '/images/homepage/rating.svg',
    },
    
];

const TestimonialSlider = () => {

    var settings = {
        dots: false,
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
            <Slider className={TestimonialStyle.testimonials} {...settings}>
                {testimonaialContent.map((testimonaialContent) => (
                    <div className={TestimonialStyle.testimonial_box} key={testimonaialContent.id}>
                        <p className={TestimonialStyle.testimonial_txt}>{testimonaialContent.review}</p>
                        <p className={TestimonialStyle.testimonial_name}>{testimonaialContent.name}</p>
                        <Image
                            src={testimonaialContent.rating}
                            alt="Icons"
                            width={145}
                            height={20}
                        />
                        <Quote className={TestimonialStyle.quote}/>
                        
                    </div>
                ))}
            </Slider>
        </>
    )
}


export default TestimonialSlider