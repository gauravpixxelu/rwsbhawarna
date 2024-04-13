import Image from "next/image"
import OverviewStyle from './overview.module.css'

const ourDream = [
    {
        id: 1,
        image: '/images/overview/dummy-img.jpg',
        title: 'Top School',
        text: 'Our School is a public school that attracts a lot of potential students in the region, also other countries.',
    },
    {
        id: 2,
        image: '/images/overview/dummy-img.jpg',
        title: 'British Council',
        text: 'The students have exchanged e-letters and gifts under the projects “Monument of India”, “Food and Flavour” and “Games we play”.',
    },
    {
        id: 3,
        image: '/images/overview/dummy-img.jpg',
        title: 'Teaching Quality',
        text: 'Teacher quality is one of the four key pillars of the Primary’s students-first approach to school education.',
    },
    {
        id: 4,
        image: '/images/overview/dummy-img.jpg',
        title: 'German Language',
        text: 'Knowing a foreign language not only becomes a catalyst for international education but also opens a window to the diverse cultures of the world.',
    }
];

const OurSchoolSection = () => {
    return (
        <>
            <section className={OverviewStyle.ourdream_sec}>
                <div className="container">
                    <div className={OverviewStyle.ourdream_sec_hdng}>
                        <h3>The Dream Of Yesterday Is The Hope Of Today & <span>The Reality Of Tomorrow</span></h3>
                    </div>
                    <div className={`${OverviewStyle.row} row`}>
                        {ourDream.map((ourDream) => (
                            <div className="col-md-3" key={ourDream.id}>
                                <div className={OverviewStyle.ourdream_boxes}> 
                                    <Image
                                        src={ourDream.image}
                                        alt="Icons"
                                        width={1000}
                                        height={1000}
                                        style={{ width: '100%', height: 'auto'}}
                                    />
                                    <h6>{ourDream.title}</h6>
                                    <p>{ourDream.text}</p>
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