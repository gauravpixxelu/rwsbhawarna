import React from 'react';
import ChildrenStyle from './children.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'

const ChildrenScienceCard = () => {

    return (
        <section className={ChildrenStyle.childrens_card}>
            <div className='container'>
                <div className='row card-save'>
                    <div className='col-md-6'>
                        <div className={ChildrenStyle.images_card}>
                            <Image
                                src="/images/children-science/clone-1.jpg"
                                alt="Logos"
                                width={800}
                                height={800}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={ChildrenStyle.images_card}>
                            <Image
                                src="/images/children-science/clone-2.jpg"
                                alt="Logos"
                                width={800}
                                height={800}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChildrenScienceCard;