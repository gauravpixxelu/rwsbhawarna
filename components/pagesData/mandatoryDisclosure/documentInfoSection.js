import MandatoryStyle from "./mandatory.module.css";
import Table from 'react-bootstrap/Table';
import Link from 'next/link'

const DocumentInfoSection = () => {
    return (
        <section className={MandatoryStyle.data_sec}>
            <div className="container">
                <h6>B: DOCUMENTS AND INFORMATION:</h6>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL NO.</th>
                            <th>DOCUMENTS/INFORMATION</th>
                            <th>UPLOADED DOCUMENTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
                            <td><Link href="#">www.rwsbhawarna.com/affiliation-letter/</Link></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE</td>
                            <td><Link href="#">www.rwsbhawarna.com/affiliation-letter/</Link></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td>
                            <td><Link href="#">www.rwsbhawarna.com/affiliation-letter/</Link></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE</td>
                            <td><Link href="#">www.rwsbhawarna.com/affiliation-letter/</Link></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td>
                            <td><Link href="#">www.rwsbhawarna.com/affiliation-letter/</Link></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td>
                            <td><Link href="#">www.rwsbhawarna.com/affiliation-letter/</Link></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATIONOR SELF CERTIFICATION BY SCHOOL</td>
                            <td><Link href="#">www.rwsbhawarna.com/affiliation-letter/</Link></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td>
                            <td><Link href="#">www.rwsbhawarna.com/affiliation-letter/</Link></td>
                        </tr>
                    </tbody>
                </Table>
                <p><b>NOTE: </b>THE SCHOOLS NEEDS TO UPLOAD THE SELF ATTESTED COPIES OF ABOVE LISTED DOCUMETNS BY CHAIRMAN/MANAGER/SECRETARY AND PRINCIPAL. IN CASE, IT IS NOTICED AT LATER STAGE THAT UPLOADED DOCUMENTS ARE NOT GENUINE THEN SCHOOL SHALL BE LIABLE FOR ACTION AS PER NORMS. </p>
            </div>
        </section>
    );
};

export default DocumentInfoSection;