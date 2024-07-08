import MandatoryStyle from "./mandatory.module.css";
import Table from 'react-bootstrap/Table';
import Link from 'next/link'

const ResultsAcademicsSection = () => {
    return (
        <section className={MandatoryStyle.data_sec}>
            <div className="container">
                <h6>C: RESULT AND ACADEMICS:</h6>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>SL NO.</th>
                            <th>DOCUMENTS/INFORMATION</th>
                            <th>LINKS OF UPLOADED DOCUMENTS ON YOUR SCHOOL WEBSITE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>FEE STRUCTURE OF THE SCHOOL</td>
                            <td><Link href="#">https://www.rwsbhawarna.com/fee-structure/</Link></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ANNUAL ACADEMIC CALANDER</td>
                            <td><Link href="/pdf/mandatory/calender.pdf" target="_blank">https://www.rwsbhawarna.com/calendar/</Link></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
                            <td><Link href="#">https://www.rwsbhawarna.com/management-committee/</Link></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td>
                            <td><Link href="#">https://www.rwsbhawarna.com/management-committee/</Link></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABLILITY</td>
                            <td><Link href="/pdf/result/result-2024.pdf" target="_blank">https://www.rwsbhawarna.com/results/</Link></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </section>
    );
};

export default ResultsAcademicsSection;