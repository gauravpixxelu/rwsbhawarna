import HomeCss from './home.module.css'
import TestimonialSlider from '../comman/testimonial/testimonialSlider'


const TestimonialSection = () => {
    return (
        <>
            <section className={HomeCss.testimonial_sec}>
                <div className="container">
                <div className={HomeCss.happyface_sec_hdng}>
                        <h2>Happy Parents <span>Testimonials</span> </h2>
                    </div>
                    <TestimonialSlider />
                </div>
            </section>
        </>
    )
}

export default TestimonialSection