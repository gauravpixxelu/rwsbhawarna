import Image from "next/image"
import TeacherStyle from "../teacher.module.css";

const pgtimages = [
    {
        id: 1,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Mr. Sandeep Kumar',
    },
    {
        id: 2,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Radhika Sood',
    },
    {
        id: 3,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Ritu Sharma',
    },
    {
        id: 4,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Rini Sarika Chand',
    },
    {
        id: 5,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Shilpa Dogar',
    },
    {
        id: 6,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Samita Rana',
    },
    {
        id: 7,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Mr. Arun Kumar',
    },
    {
        id: 8,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Reeta',
    }
];

const PGT = () => {
    return (
        <div className={TeacherStyle.staff_member}>
            {pgtimages.map((pgtimages) => (
                <div className={TeacherStyle.member_box} key={pgtimages.id}>
                    <Image
                        src={pgtimages.image}
                        alt="Icons"
                        width={1920}
                        height={430}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <h6>{pgtimages.name}</h6>
                </div>
            ))}
        </div>
    );
};

export default PGT;