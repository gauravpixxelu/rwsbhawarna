import HomeCss from './home.module.css'
import TestimonialSlider from '../comman/testimonial/testimonialSlider'


const TestimonialSection = () => {
    return (
        <>
            <section className={HomeCss.testimonial_sec}>
                <div className="container">
                    <TestimonialSlider />
                </div>
            </section>
        </>
    )
}

export default TestimonialSection