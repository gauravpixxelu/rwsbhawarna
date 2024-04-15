import MandatoryStyle from "./mandatory.module.css";
import Table from 'react-bootstrap/Table';

const GeneralInfoSection = () => {
    return (
        <section className={MandatoryStyle.data_sec}>
            <div className="container">
                <h6>A: GENERAL INFORMATION:</h6>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>SL NO.</th>
                            <th>INFORMATION</th>
                            <th>DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>NAME OF THE SCHOOL</td>
                            <td>RAINBOW WORLD SCHOOL BARI BHAWARNA KANGRA HP</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>AFFILIATION NO.(IF APPLICABLE)</td>
                            <td>630224</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>SCHOOL CODE (IF APPLICABLE)</td>
                            <td>43214</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>COMPLETE ADDRESS WITH PIN CODE</td>
                            <td>RAINBOW WORLD SCHOOL, VILL BARI, BHAWARNA, PALAMPUR, KANGRA, -176083</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>PRINCIPAL NAME</td>
                            <td>Suzana David</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>PRINCIPAL QUALIFICATION</td>
                            <td>M.A.B.E.D</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>SCHOOL EMAIL ID</td>
                            <td>rainbowworldschool@gmail.com</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>CONTACT DETAILS (LANDLINE/MOBILE)</td>
                            <td>9882588999</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </section>
    );
};

export default GeneralInfoSection;