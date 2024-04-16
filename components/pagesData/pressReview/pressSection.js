import PressSlider from "@/components/comman/pressReviews/pressSlider";
import PressStyle from './press.module.css';

const PressSection = () => {
    return (
        <section className={PressStyle.press_sec}>
            <div className="container">
                <PressSlider />
            </div>
        </section>
    );
};

export default PressSection;