import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActivityStyle from './actvitySlider.module.css';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';


const activity = [
    {
        id: 1,
        image: '/images/activity/img1.jpg',
        title: 'Anveshika Lab',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 2,
        image: '/images/activity/img2.jpg',
        title: 'Archery',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 3,
        image: '/images/activity/img3.jpg',
        title: 'British Council',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 4,
        image: '/images/activity/img4.jpg',
        title: 'Cambridge Based Learning',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 5,
        image: '/images/activity/img5.jpg',
        title: 'Fit India School',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 6,
        image: '/images/activity/img6.jpg',
        title: 'German Language',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 7,
        image: '/images/activity/img7.jpg',
        title: 'Gymnastics',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 8,
        image: '/images/activity/img8.jpg',
        title: 'Horse Riding',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 9,
        image: '/images/activity/img9.jpg',
        title: 'NCC',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 10,
        image: '/images/activity/img10.jpg',
        title: 'Scouts and Guide',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 11,
        image: '/images/activity/img11.jpg',
        title: 'Sky observatory',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 12,
        image: '/images/activity/img12.jpg',
        title: 'Taekwondo',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },
    {
        id: 13,
        image: '/images/activity/img13.jpg',
        title: 'Tal Tinkernig Lab',
        text: 'Rainbow World School has been accredited with the International School Award (ISA) by British Council. The award provides a platform to students to produce a valuable framework …',
    },



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