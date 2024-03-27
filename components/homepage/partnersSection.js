import HomeCss from './home.module.css'
import LogoSlider from '../comman/logoSlider/logoSlider'

const PartnersSection = () => {
    return (
        <>
            <section className={HomeCss.partner_sec}>
                <div className="container">
                    <LogoSlider />
                </div>
            </section>
        </>
    )
}

export default PartnersSection