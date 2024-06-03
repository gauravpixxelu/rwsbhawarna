import Image from "next/image"
import FacilityStyle from './facilities.module.css'

const facilityContent = [
    {
        id: 1,
        title: 'Infrastructure',
        content: 'The goal of infrastructure development at Rainbow World School is to increase motivation, inspire the students, and to inculcate passion in Academics, Sports and all round development of the child. It is a benchmark at Rainbow World School to empower the students with the best of facilities so that the students develop in the best of surroundings. Parameters of cleanliness, safety, comfort, adequacy, reliability, easiness, equal opportunity are the Hallmarks of each and every element of the school.',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 2,
        title: 'ATL',
        content: 'ATL is the flagship initiative of AIM, the government of India, to nurture an innovative mindset amongst the school students. RWS feels proud to be the only school in the vicinity with ATAL TINKERING LAB with a goal to foster a design mindset, adaptive learning, computational thinking and physical thinking.',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 3,
        title: 'International Dimensions In Education',
        content: `British Council – Our school offers international exposure in learning through collaboration with the British Council. 
                  German Language - The school’s partnership with German Embassy provides our students learning of German language exclusively  and provides International Exposure. 
                  Cambridge – Our school proudly offers the globally recognized Cambridge curriculum, equipping students for success in a globalized world and beyond.`,
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 4,
        title: 'Tech-integrated Classrooms',
        content: 'The School has well furnished, spacious and well ventilated class rooms with smart boards, lecture platforms and proper lighting system to meet today’s requirements. Interactive white boards are used for classroom teaching and involve students to learn with technology. Notes, flowcharts, drawings and PPTs used in the course of teaching are saved to be accessed as and when required. Students are actively involved in their learning through presentations made by them using the whiteboards.',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 5,
        title: 'Information Hub',
        content: 'The serene ambience inspires a love for reading. Information at the click of a finger tip invites the young users to delve into the magical world of words and the wealth of research material available. The School library is spacious and well maintained. It is filled with racks and almirahs Containing more than 3000 books of different titles and subjects including students’ text books, reference books for teachers, periodicals and news papers.',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 6,
        title: 'Digital lab',
        content: 'In the age of Artificial Intelligence (AI), developing digital learning skills is essential. Our school provides well-equipped, user-friendly computer labs loaded with the latest digital services. Here, we train children to leverage AI in their everyday lives.',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 7,
        title: 'Taekwondo',
        content: 'Taekwondo training provided by the school keeps children physically active and mentally sound which is the basic requirement for a child’s holistic development.',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 8,
        title: 'Archery',
        content: 'Our school proudly offers an archery program for students of all ages and skill levels. This exciting sport combines physical activity with mental focus, fostering self-discipline, concentration, and hand-eye coordination in a safe and supportive environment. Under the guidance of qualified instructors, students learn proper technique, safety protocols, and the thrill of hitting the target',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 9,
        title: 'Gymnastics',
        content: 'We proudly offer a dynamic gymnastics program designed to nurture strength, flexibility, and confidence in students of all ages and abilities encouraging a spirit of teamwork and support, fostering a positive learning experience that extends far beyond the gym.',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 10,
        title: 'NCC',
        content: 'NCC is a Tri Services Organization comprising the army, naval and air wings. It engages in grooming the youth-”the leader of Tomorrow” into disciplined and patriotic citizens. These cadets learn to live and work for others with pride and dignity.',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 11,
        title: 'Scouts And Guides',
        content: 'Prepared and resourceful, our Scouts and Guides navigate any terrain with confidence, equipped with knowledge and practical skills. From wilderness survival to community service, our Scouts and Guides are well-equipped to lead and leave a positive impact.',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 12,
        title: 'Music & Dance Room',
        content: 'Music is the soul and Dance is the fabric of our society, and they can shape abilities of students. The school has well equipped music and dance room with all the musical instruments, allowing the children to tap into their musical talent. Students are trained by talented teachers in their musical pursuits.',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 13,
        title: 'Well Equipped Science Labs',
        content: ' Our well-equipped science labs provide students with an immersive experience, allowing them to go beyond textbooks and delve into the world of scientific discovery through engaging experiments.',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 14,
        title: 'Transport Facilities',
        content: 'The School provides transport facilities in shape of school buses for students residing beyond the walking distance from the school, so that they attend the school in time. The school owns a fleet of buses with highly trained drivers & helpers. All the buses have got a teacher on duty. In case of his/her absence a supervisor/ helper is provided for the safety of the children. Each child wears an I-Card which gives his details.',
        image: '/images/overview/dummy-img.jpg',
    },

    {
        id: 15,
        title: 'Music and Dance room',
        content: '',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 16,
        title: 'Co-Curricular Activities',
        content: '',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 17,
        title: 'Sports',
        content: '',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 18,
        title: 'Summer Camp',
        content: '',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 19,
        title: 'Trip and Tours',
        content: '',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 20,
        title: 'Art and Craft',
        content: '',
        image: '/images/overview/dummy-img.jpg',
    },
    {
        id: 21,
        title: 'Well equiped Science lab',
        content: '',
        image: '/images/overview/dummy-img.jpg',
    },
];

const FacilitiesData = () => {
    return (
        <section className={FacilityStyle.faclities_sec}>
            <div className="container">
                <div className={FacilityStyle.faclities_hdng}>
                    <h3>Your Facilities</h3>
                    <p>The trustees of Diwan Chand Memorial Education Society are greatly indebted to their Father Late Shri Diwan Chand Ji for being the source of inspiration and motivation of this noble and sacred cause of Education.</p>
                </div>
                <div className="row">
                    {facilityContent.map((facilityContent) => (
                        <div className={FacilityStyle.facility_box} key={facilityContent.id}>
                            <Image
                                src={facilityContent.image}
                                alt="Icons"
                                width={400}
                                height={400}
                                style={{ width: '30%', height: 'auto' }}
                            />
                            <div className={FacilityStyle.facility_box_img}>
                                <h5>{facilityContent.title}</h5>
                                <p>{facilityContent.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilitiesData;