import ContactStyle from './contact.module.css'

const MapSection = () => {
    return (
        <section className={ContactStyle.map_sec}>
            <div className="container">
                <div className={ContactStyle.map_hdng}>
                    <h3>Find us on <span>Google Maps</span></h3>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.6800431923393!2d76.48783297614192!3d32.023779622097436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b510198ec2d5%3A0x3053196f82e1f6d6!2sRainbow%20World%20School!5e0!3m2!1sen!2sin!4v1713158339771!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
};

export default MapSection;