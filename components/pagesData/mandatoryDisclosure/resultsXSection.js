import MandatoryStyle from "./mandatory.module.css";
import Table from 'react-bootstrap/Table';

const ResultXSection = () => {
    return (
        <section className={MandatoryStyle.data_sec_five}>
            <div className="container">
                <h6>RESULT CLASS: X</h6>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>SL NO.</th>
                            <th>YEAR</th>
                            <th>NO. OF REGISTERED STUDENTS</th>
                            <th>NO. OF STUDETNS PASSED</th>
                            <th>PASS PERCENTAGE</th>
                            <th>REMARKS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2023</td>
                            <td>41</td>
                            <td>41</td>
                            <td>100</td>
                            <td>SIX STUDENTS GOT ABOVE 90 PERCANTAGE.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2022</td>
                            <td>40</td>
                            <td>40</td>
                            <td>100</td>
                            <td>SIX STUDENTS GOT ABOVE 90 PERCANTAGE.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2021</td>
                            <td>34</td>
                            <td>43</td>
                            <td>100</td>
                            <td>SIX STUDENTS GOT ABOVE 90 PERCANTAGE.</td>
                        </tr>                        
                    </tbody>
                </Table>
            </div>
        </section>
    );
};

export default ResultXSection;