import Image from "next/image"
import TeacherStyle from "../teacher.module.css";

const tgtimages = [
    {
        id: 1,
        image: '/images/teacherstaff/tgt/ABINASH.jpg',
        name: 'Mr. ABINASH KUMAR',
    },
    {
        id: 2,
        image: '/images/teacherstaff/tgt/AKSHAY.jpg',
        name: 'Mr. AKSHAY KUMAR',
    },
    {
        id: 3,
        image: '/images/teacherstaff/tgt/KULDEV.jpg',
        name: 'Mr. KULDEV',
    },
    {
        id: 4,
        image: '/images/teacherstaff/tgt/RAMAN.jpg',
        name: 'Mr. RAMAN KUMAR',
    },
    {
        id: 5,
        image: '/images/teacherstaff/tgt/ANITA.jpg',
        name: 'Ms. ANITA RANI',
    },
    {
        id: 6,
        image: '/images/teacherstaff/tgt/ARTI.jpg',
        name: 'Ms. ARTI RANA',
    },
    {
        id: 7,
        image: '/images/teacherstaff/tgt/ASHA.jpg',
        name: 'Ms. ASHA DEVI',
    },
    {
        id: 8,
        image: '/images/teacherstaff/tgt/MANU.jpg',
        name: 'Ms. MANU SHARMA',
    },
    {
        id: 9,
        image: '/images/teacherstaff/tgt/PRESSY.jpg',
        name: 'Ms. PRESSY SHARMA',
    },
    {
        id: 10,
        image: '/images/teacherstaff/tgt/RUCHI.jpg',
        name: 'Ms. RUCHI SHARMA ',
    },
    {
        id: 11,
        image: '/images/teacherstaff/tgt/RUPAM.jpg',
        name: 'Ms. RUPAM GOSWAMI',
    },
    {
        id: 12,
        image: '/images/teacherstaff/tgt/SAVITA.jpg',
        name: 'Ms. SAVITA DEVI',
    },
    {
        id: 13,
        image: '/images/teacherstaff/tgt/SHIVANI.jpg',
        name: 'Ms. SHIVANI KUMARI',
    },
    {
        id: 14,
        image: '/images/teacherstaff/tgt/SUMAN.jpg',
        name: 'Ms. SUMAN KUMARI ',
    },
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