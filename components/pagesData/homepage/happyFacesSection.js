import HomeCss from './home.module.css'
import StudentSlider from '../../comman/studentSlider/studentSlider'

const HappyFacesSection = () => {
    return (
        <>
            <section className={HomeCss.happyface_sec}>
                <div className="container">
                    <div className={HomeCss.happyface_sec_hdng}>
                        <h2>RWS <span>Happy Faces</span></h2>
                    </div>
                    <StudentSlider />
                </div>
            </section>
        </>
    )
}

export default HappyFacesSection