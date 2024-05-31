import HomeCss from './home.module.css'
import ActivitySlider from '../../comman/activitySlider/activitySlider'

const ActivitiesSection = () => {
    return (
        <>
            <section className={HomeCss.activity_sec}>
                <div className="container">
                    <div className={HomeCss.happyface_sec_hdng}>
                        <h2><span>Opportunities and Activities</span> beyond the classroom</h2>
                    </div>
                    <ActivitySlider />
                </div>
            </section>
        </>
        
    )
}

export default ActivitiesSection