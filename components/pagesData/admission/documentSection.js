import { Gem } from "react-bootstrap-icons";
import AdmissionStyle from './admission.module.css'

const DocumentSection = () => {
    return (
        <section className={AdmissionStyle.document_sec}>
            <div className="container">
                <h3>Documents required at the time of <span>Admission </span></h3>
                <ul>
                    <li><Gem />The original copy of Birth Certificate from MCD for Checking &amp; another attested photocopy for submission to the school.</li>
                    <li><Gem />Original School leaving certificate of previous school duty attested by Education Officer.</li>
                    <li><Gem />Proof of Residence (Photocopy of Telephone Bill / Electricity Bill / Election Card / Passport / Ration Card etc.</li>
                    <li><Gem />Result / Progress report card of I to IX std. and C.B.S.E. Mark sheet of XI std.</li>
                    <li><Gem />Photograph of Child (two copies).</li>
                    <li><Gem />Copy of PAN CARD / Income Certificate / Caste Proof.</li>
                    <li><Gem />Copy of Aadhar Card</li>
                    <li><Gem />Parents Photograph</li>
                </ul>
            </div>
        </section>
    );
};

export default DocumentSection;