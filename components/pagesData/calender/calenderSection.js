import Image from "next/image"
import CalenderStyle from './calender.module.css'

const CalenderSection = () => {
    return (
        <section className={CalenderStyle.calender_sec}>
            <div className="container">
                <Image
                    src="/images/calender/calender.png"
                    alt="Icons"
                    width={1500}
                    height={2000}
                    style={{ width: '80%', height: 'auto', margin: 'auto', display: 'block'}}
                />
            </div>
        </section>
    );
};

export default CalenderSection;