import Image from 'next/image'
import Link from 'next/link'
import HomeCss from './home.module.css'


const AboutSection = () => {
    return (
        <>
            <section className={HomeCss.about_sec}>
                <div className="container">
                    <div className={`${HomeCss.row} row`}>
                        <div className="col-md-6" class="revert-mobile">
                            <div className={HomeCss.about_sec_txt}>
                                <h6>The Race for excellence has no finish line</h6>
                                <h3>Rainbow World School, Bhawarna</h3>
                                <p>Perched on the outskirts of Palampur town, Rainbow World School, Bhawarna enjoys a picturesque setting with modern amenities.Located in a vibrant community , Rainbow World School, Bhawarna has been offering a diverse range of academic programs and extra curricular activities since 2015. </p>
                                <Link href="#" className="custom-btn"><span>Read More</span></Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={HomeCss.about_sec_img}>
                                <Image
                                    src="/images/homepage/student-img.png"
                                    alt="Logos"
                                    width={800}
                                    height={800}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <Link href="#">
                                    <Image
                                        src="/images/homepage/visit-button.svg"
                                        alt="Logos"
                                        className={HomeCss.visit}
                                        width={400}
                                        height={400}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className={HomeCss.about_txt}>
                        <h4>Welcome to <span>Rainbow World School</span> Bhawarna, United in Vision and Stronger in execution along with its dynamic team of experts serving above and beyond the call of duty, always dedicated to excellence and striving for nothing less than success.</h4>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection