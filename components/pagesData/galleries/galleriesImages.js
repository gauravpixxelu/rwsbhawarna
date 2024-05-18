import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GalleriesStyle from './galleries.module.css';

const GalleriesImages = () => {
    const tabs = [
        {
            id: 1,
            tabtitle: 'Achievements',
            images: [
                { path: '/images/galleries/Achievement-1.jpg', title: 'Image 1 Title' },
                { path: '/images/galleries/Achievement-2.jpg', title: 'Image 2 Title' },
                { path: '/images/galleries/Achievement-3.jpg', title: 'Image 3 Title' },
                { path: '/images/galleries/Achievement-4.jpg', title: 'Image 4 Title' },
                { path: '/images/galleries/Achievement-5.jpg', title: 'Image 5 Title' },
                { path: '/images/galleries/Achievement-6.jpg', title: 'Image 6 Title' },
                { path: '/images/galleries/Achievement-7.jpg', title: 'Image 7 Title' },
                { path: '/images/galleries/Achievement-8.jpg', title: 'Image 8 Title' },
                { path: '/images/galleries/Achievement-9.jpg', title: 'Image 9 Title' },
            ]
        },
        {
            id: 2,
            tabtitle: 'Annual Function',
            images: [
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 1 Title' },
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 2 Title' },
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 3 Title' }
            ]
        },
        {
            id: 3,
            tabtitle: 'German Exchange programme',
            images: [
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 1 Title' },
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 2 Title' },
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 3 Title' },
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 3 Title' },
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 1 Title' },
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 2 Title' },
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 3 Title' },
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 3 Title' },
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 3 Title' }
                
            ]
        },
        {
            id: 4,
            tabtitle: 'Science Fair 2018-24',
            images: [
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 1 Title' },
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 2 Title' },
                { path: '/images/mandatoryDisclosure/mandatory-banner.jpg', title: 'Image 3 Title' }
            ]
        },
        // Add more tabs with their respective images arrays
    ];

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className={GalleriesStyle.galleries_sec}>
            <div className='container'>
                <div className={GalleriesStyle.explore_now}>
                    <h3>Explore Our Gallery</h3>
                </div>
                <Tabs defaultActiveKey={tabs[0].tabtitle} id="vertical-tab-example" className={GalleriesStyle.verticalTabs}>
                    {tabs.map((tab) => (
                        <Tab eventKey={tab.tabtitle} title={tab.tabtitle} key={tab.id}>
                            <div className={GalleriesStyle.tabContent}>
                                <div className="row">
                                    <div className={`${GalleriesStyle.tab_img} col-md-12`}>
                                        {tab.images.map((image, index) => (
                                            <div key={index} className={GalleriesStyle.imageContainertabs}>
                                                <Image
                                                    src={image.path}
                                                    alt={image.title}
                                                    width={1000}
                                                    height={1000}
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                                <p className='gallery-content'>{image.title}</p>
                                            </div>
                                        ))}
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

export default GalleriesImages;