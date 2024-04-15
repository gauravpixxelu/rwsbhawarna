import MandatoryStyle from "./mandatory.module.css";
import Table from 'react-bootstrap/Table';
import Link from 'next/link'

const SchoolInfrastructureSection = () => {
    return (
        <section className={MandatoryStyle.data_sec}>
            <div className="container">
                <h6>E: SCHOOL INFRASTRUCTURE:</h6>
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
                            <td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)</td>
                            <td>7634</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>NO. AND SIZE OF THE CLASS ROOMS (IN SQ FTMTR)</td>
                            <td>49 & 520</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)</td>
                            <td>5 & 534</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>INTERNET FACILITY</td>
                            <td>YES</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>NO. OF GIRLS TOILETS</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>NO. OF BOYS TOILETS</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL</td>
                            <td><Link href="#">https://www.youtube.com/watch?v=nopvSmj5wM</Link></td>
                        </tr>   
                    </tbody>
                </Table>
            </div>
        </section>
    );
};

export default SchoolInfrastructureSection;