import Image from "next/image"
import TeacherStyle from "../teacher.module.css";

const tgtimages = [
    {
        id: 1,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Neha Sharma',
    },
    {
        id: 2,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Anita Rani',
    },
    {
        id: 3,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Sonu Verma',
    },
    {
        id: 4,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Arti Jamwal',
    },
    {
        id: 5,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Ruchi Sharma',
    },
    {
        id: 6,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Mr. Abhinas Kumar',
    },
    {
        id: 7,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Mr. Kuldev',
    },
    {
        id: 8,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Manu Sharma',
    },
    {
        id: 9,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Minaxi Sharma',
    },
    {
        id: 10,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Savita Devi',
    },
    {
        id: 11,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Pressy Sharma',
    },
    {
        id: 12,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Mr. Raman Kumar',
    },
    {
        id: 12,
        image: '/images/homepage/tab-img4.jpg',
        name: 'Ms. Suman Kumari',
    }
];

const TGT = () => {
    return (
        <div className={TeacherStyle.staff_member}>
            {tgtimages.map((tgtimages) => (
                <div className={TeacherStyle.member_box} key={tgtimages.id}>
                    <Image
                        src={tgtimages.image}
                        alt="Icons"
                        width={1920}
                        height={430}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <h6>{tgtimages.name}</h6>
                </div>
            ))}
        </div>
    );
};

export default TGT;