import Image from "next/image"
import Link from "next/link";
import HomeCss from './home.module.css'

const boxesContent = [
    {
        id: 1,
        icon: '/images/homepage/mission-icon1.svg',
        title: 'Mission',
        content: 'Rainbow adopts a qualitative approach in imparting education through modern and innovative techniques.',
    },
    {
        id: 2,
        icon: '/images/homepage/mission-icon2.svg',
        title: 'Vision',
        content: "An emblem is a vivid reflection on the spirit that goes into the making of an organisation or an institute.",
    },
    {
        id: 3,
        icon: '/images/homepage/mission-icon3.svg',
        title: 'Aims',
        content: 'To make a student future ready by imparting life skills and modern quality education based upon our ancient cultural and ethical values.',
    },
];

const MissionSection = () => {
    return (
        <>
            <section className={HomeCss.mission_sec}>
                <div className="container">
                    <div className="row">
                        {boxesContent.map((boxesContent) => (
                            <div className="col-md-4" key={boxesContent.id}>
                                <div className={HomeCss.mission_boxes}>
                                    <Image
                                        src={boxesContent.icon}
                                        alt="Icons"
                                        width={64}
                                        height={64}
                                    />
                                    <h5>{boxesContent.title}</h5>
                                    <p>{boxesContent.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MissionSection