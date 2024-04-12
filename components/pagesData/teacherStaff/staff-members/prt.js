import Image from "next/image"
import TeacherStyle from "../teacher.module.css";

const prtimages = [
    {
        id: 1,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Amita Pathania',
    },
    {
        id: 2,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Bhawana Kotwal',
    },
    {
        id: 3,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Safna Jaggi',
    },
    {
        id: 4,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Monika Manhas',
    },
    {
        id: 5,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Kumari Rekha',
    },
    {
        id: 6,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Neelam Kumari',
    },
    {
        id: 7,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Reena Devi',
    },
    {
        id: 8,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Shallu',
    }
];

const PRT = () => {
    return (
        <div className={TeacherStyle.staff_member}>
            {prtimages.map((prtimages) => (
                <div className={TeacherStyle.member_box} key={prtimages.id}>
                    <Image
                        src={prtimages.image}
                        alt="Icons"
                        width={1920}
                        height={430}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <h6>{prtimages.name}</h6>
                </div>
            ))}
        </div>
    );
};

export default PRT;