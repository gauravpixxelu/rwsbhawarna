import React from 'react';
import ChildrenStyle from './children.module.css';

const ChildrenScienceContent = () => {
    return (
        <section className={ChildrenStyle.innerchildrenhood}>
                <div className={ChildrenStyle.childrencontent}>
                    <div className={ChildrenStyle.scrollingText}>
                        {/* Scrolling text using CSS animations */}
                        <p className={ChildrenStyle.textmarque}>
                            The Science Congress is an exciting event where students, educators, researchers, and enthusiasts come together to showcase their scientific projects and ideas. It encourages curiosity, fosters discussions, and provides a platform for interactive demonstrations. This annual gathering nurtures a love for science, offers valuable learning opportunities, and inspires the next generation of scientists and innovators.
                        </p>
                    </div>
                </div>
        </section>
    );
};

export default ChildrenScienceContent;