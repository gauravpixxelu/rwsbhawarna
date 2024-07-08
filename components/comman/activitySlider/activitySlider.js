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
        text: 'It is a thrilling journey of discovering scientific principles in everything around them RWS regularly organize interactive sessions with the students based on experiments & innovative ideas.',
    },
    {
        id: 2,
        image: '/images/activity/img2.jpg',
        title: 'Archery',
        text: 'Our school proudly offers an archery program for students of all ages and skill levels. This exciting sport combines physical activity with mental focus, fostering self-discipline, concentration, and hand-eye coordination in a safe and supportive environment. Under the guidance of qualified instructors, students learn proper technique, safety protocols, and the thrill of hitting the target',
    },
    // {
    //     id: 3,
    //     image: '/images/activity/img3.jpg',
    //     title: 'British Council',
    //     text: 'Our school offers international exposure in learning through collaboration with the British Council.',
    // },
    {
        id: 4,
        image: '/images/activity/img4.jpg',
        title: 'Cambridge Based Learning',
        text: 'Our school proudly offers the globally recognized Cambridge curriculum, equipping students for success in a globalized world and beyond.',
    },
    {
        id: 5,
        image: '/images/activity/img5.jpg',
        title: 'Fit India School',
        text: 'The Fit India Movement, launched by our Prime Minister, aims to make fitness a cornerstone of daily life. By joining this movement, we fostering a love for physical activity and empowering students to develop lifelong healthy habits.',
    },
    {
        id: 6,
        image: '/images/activity/img6.jpg',
        title: 'German Language',
        text: 'The school’s partnership with German Embassy provides our students learning of German language exclusively  and provides International Exposure.',
    },
    {
        id: 7,
        image: '/images/activity/img7.jpg',
        title: 'Gymnastics',
        text: 'We proudly offer a dynamic gymnastics program designed to nurture strength, flexibility, and confidence in students of all ages and abilities encouraging a spirit of teamwork and support, fostering a positive learning experience that extends far beyond the gym.',
    },
    {
        id: 8,
        image: '/images/activity/img8.jpg',
        title: 'Horse Riding',
        text: 'Horses add to our joy grace, beauty & freedom. Thus we provide an opportunity to our students to ride the sky by riding a horse.',
    },
    {
        id: 9,
        image: '/images/activity/img9.jpg',
        title: 'NCC',
        text: 'NCC is a Tri Services Organization comprising the army, naval and air wings. It engages in grooming the youth-”the leader of Tomorrow” into disciplined and patriotic citizens. These cadets learn to live and work for others with pride and dignity.',
    },
    {
        id: 10,
        image: '/images/activity/img10.jpg',
        title: 'Scouts and Guide',
        text: 'Prepared and resourceful, our Scouts and Guides navigate any terrain with confidence, equipped with knowledge and practical skills. From wilderness survival to community service, our Scouts and Guides are well-equipped to lead and leave a positive impact.',
    },
    {
        id: 11,
        image: '/images/activity/img11.jpg',
        title: 'Sky observatory',
        text: 'Equipped with cutting-edge telescopes and guided by knowledgeable astronomers, students gaze at the stars, observe celestial phenomena, and delve into the mysteries of the universe to create an awareness about events in space and an understanding of how these events follow the same principle of science which the events on the Earth follows.',
    },
    {
        id: 12,
        image: '/images/activity/img12.jpg',
        title: 'Taekwondo',
        text: 'Taekwondo training provided by the school keeps children physically active and mentally sound which is the basic requirement for a child’s holistic development.',
    },
    {
        id: 13,
        image: '/images/activity/img13.jpg',
        title: 'Atal Tinkernig Lab',
        text: 'ATL is the flagship initiative of AIM, the government of India, to nurture an innovative mindset amongst the school students. RWS feels proud to be the only school in the vicinity with ATAL TINKERING LAB with a goal to foster a design mindset, adaptive learning, computational thinking and physical thinking.',
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