import Image from "next/image"

const PressGallery = () => {
    return (
        <section className="PressGallery_sec">
            <div className="container">
                <div className="view-press-gallery">
                    <img src="images/press/no-1.png" alt="view-press" />
                    <img src="images/press/no-2.png" alt="view-press" />
                    <img src="images/press/no-3.png" alt="view-press" />
                    <img src="images/press/no-4.png" alt="view-press" />
                </div>
                <div className="view-press-gallery">
                    <img src="images/press/no-5.png" alt="view-press" />
                    <img src="images/press/no-6.png" alt="view-press" />
                    <img src="images/press/no-7.png" alt="view-press" />
                    <img src="images/press/no-8.png" alt="view-press" />
                </div>
                <div className="view-press-gallery">
                    <img src="images/press/no-9.png" alt="view-press" />
                    <img src="images/press/no-10.png" alt="view-press" />
                </div>
            </div>
        </section>
    );
};

export default PressGallery;