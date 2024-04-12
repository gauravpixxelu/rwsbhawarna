import Image from "next/image"
import Link from "next/link";
import HomeCss from './home.module.css'

const ourSchoolContent = [
    {
        id: 1,
        image: '/images/homepage/school-img1.jpg',
        title: 'Pre Primary',
        link: '#',
    },
    {
        id: 2,
        image: '/images/homepage/school-img2.jpg',
        title: 'Primary',
        link: '#',
    },
    {
        id: 3,
        image: '/images/homepage/school-img3.jpg',
        title: 'Middle Wing',
        link: '#',
    },
    {
        id: 4,
        image: '/images/homepage/school-img4.jpg',
        title: 'Secondary',
        link: '#',
    }
];

const OurSchoolSection = () => {
    return (
        <>
            <section className={HomeCss.ourschool_sec}>
                <div className="container">
                    <div className={HomeCss.ourschool_sec_hdng}>
                        <h2>Our <span>School</span></h2>
                    </div>
                    <div className={`${HomeCss.row} row`}>
                        {ourSchoolContent.map((ourSchoolContent) => (
                            <div className="col-md-3" key={ourSchoolContent.id}>
                                <div className={HomeCss.ourschool_boxes}>
                                    <Image
                                        src={ourSchoolContent.image}
                                        alt="Icons"
                                        width={1000}
                                        height={1000}
                                        style={{ width: '100%', height: 'auto'}}
                                    />
                                    <h6>{ourSchoolContent.title}</h6>
                                    <Link href={ourSchoolContent.link}>Read More</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurSchoolSection