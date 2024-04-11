import MandatoryStyle from "./mandatory.module.css";
import Table from 'react-bootstrap/Table';

const StaffSection = () => {
    return (
        <section className={MandatoryStyle.data_sec}>
            <div className="container">
                <h6>D: STAFF (TEACHING):</h6>
                <Table striped bordered hover>
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
                            <td>PRINCIPAL</td>
                            <td>SUZANA DAVID</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>PRINCIPAL</td>
                            <td>SUZANA DAVID</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>TEACHERS SECTION RATIO</td>
                            <td>1.5</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>DETAILS OF SPECIAL EDUCATOR</td>
                            <td>RAJESH (BA DIPLOMA IN SPECIAL EDUCATION IN VISUAL IMPAIRED)</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>DETAILS OF COUNSELLOR AND WELNESS TEACHER</td>
                            <td>JYOTI VAIDYA AND BHAWNA KOTWAL</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </section>
    );
};

export default StaffSection;