import { useEffect, useState } from 'react';
import HomeCss from './home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const tabs = [
    {
        id: 1,
        tabtitle: 'Founder and Visionary',
        image: '/images/homepage/tab-img1.jpg',
        title: 'While educating the minds of our youth, we must not forget to educate their heart.',
        description: `<p>Success comes to those who work hard and stays with those who do not rest on past laurels. Rainbow World School is an amalgamation of exceptionally dedicated and talented teachers, an experienced and efficient management, and a safe and nurturing environment that is spread across academics, sports, artistic and social opportunities for its students.</p>
                      <p>We believe in creating a culture within the school where all our stakeholders are confident in receiving the best in education.</p>
                      <p>Since our student population is multi-cultural and multi linguistic, we teach our students.</p>`,
        button: '/about-us/founder-visionary',
        name: 'Dr. J.R. Kashyap',
        designation: 'Founder and Visionary',
    },
    {
        id: 2,
        tabtitle: 'Management Desk',
        image: '/images/homepage/tab-img2.jpg',
        title: 'The goal of education is advancement of knowledge and the dissemination of truth.',
        description: `<p>One of the most outstanding achievements of the past century has been the realization that education is an indispensable asset of every individual, every community and every nation. It can accelerate the march towards better and higher quality of life .Education alone can convert the dream of peace, freedom and social justice into a practical reality.</p>
                      <p>My heart fills with utmost pleasure as I perceive the growth and accomplishments made at the school. The school has taken a dedicated approach towards developing its core infrastructure comprising of well-equipped facilities and a hub of other amenities for a quality education and has always been accountable and legitimate. </p>`,
        button: '/about-us/management-desk',
        name: 'Mrs. Meenakshi Kashyap',
        designation: 'Management Desk',
    },
    {
        id: 3,
        tabtitle: 'Principal',
        image: '/images/homepage/tab-img3.jpg',
        title: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today. – (Malcom X)',
        description: `<p>As we look ahead to the future , we envision Rainbow World School as an Institution par-excellence in education. The school has crossed immeasurable milestones and has become a dream destination for more than a thousand students from Nursery to Grade 12 . The school is already accredited with the British council and the worlds most prominent German language is also part of the school curriculum . Besides yoga, sports like gymnastics , athletics , archery and boxing are also promoted under the guidance of expert coaches . </p>`,
        button: '/about-us/principal',
        name: 'Ms. Suzana David',
        designation: 'Principal',
    },
    {
        id: 4,
        tabtitle: 'Chairperson',
        image: '/images/homepage/tab-img4.jpg',
        title: 'All-round development of the child is construed to be the primary constituent of a good education.',
        description: `<p>Every Child is like a seed which has the potential to grow if it is nourished with love and care under the right guidance. In the current challenging times it is essential that children should not only excel in academics but should also develop courtesy, discipline, smart personality, social sensitivity and be imbibed with the traditional values and culture of our country .Childhood is the best time to lay the foundation of the core values essential for the overall development of the future citizens of tomorrow.</p>`,
        button: '/about-us/chairperson',
        name: 'Mrs. Sunita Kashyap',
        designation: 'Chairperson',
    }
];

const TabSection = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const renderHtmlContent = (htmlContent) => {
        return isClient ? { __html: htmlContent } : null;
    };

    return (
        <section className={HomeCss.tabs_sec}>
            <div className="container">
                <Tabs defaultActiveKey={tabs[0].tabtitle} id="uncontrolled-tab-example">
                    {tabs.map((tab) => (
                        <Tab eventKey={tab.tabtitle} title={tab.tabtitle} key={tab.id}>
                            <div className={HomeCss.tabContent}>
                                <div className="row">
                                    <div className={`${HomeCss.tab_data} col-md-6`}>
                                        <h3>{tab.title}</h3>
                                        <p dangerouslySetInnerHTML={renderHtmlContent(tab.description)} />
                                        <Link href={tab.button}>Read More</Link>
                                        <h6>{tab.name}</h6>
                                        <p>{tab.designation}</p>
                                    </div>
                                    <div className={`${HomeCss.tab_img} col-md-6`}>
                                        <Image
                                            src={tab.image}
                                            alt="Happy Faces"
                                            width={1000}
                                            height={1000}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default TabSection;
