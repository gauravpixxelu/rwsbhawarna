import React, { useState } from 'react';
import TeacherStyle from './teacher.module.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PGT from './staff-members/pgt';
import PRT from './staff-members/prt';
import TGT from './staff-members/tgt';
import GermanLanguage from './staff-members/germanLanguage';


const StaffTabSection = () => {

    const [activeTab, setActiveTab] = useState('PGT');

    const handleTabSelect = (tabKey) => {
        setActiveTab(tabKey);
    };

    return (
        <section className={TeacherStyle.tabs_sec}>
            <div className="container">
                <div className={TeacherStyle.tabsec_hdng}>
                    <h2><span>Teaching</span> Staff</h2>
                </div>
                <Tabs id="staff-tabs" activeKey={activeTab} onSelect={handleTabSelect}>
                    <Tab eventKey="PGT" title="PGT">
                        <div className={TeacherStyle.tabContent}>
                            {activeTab === 'PGT' && <PGT />}
                        </div>
                    </Tab>

                    <Tab eventKey="TGT" title="TGT">
                        <div className={TeacherStyle.tabContent}>
                            {activeTab === 'TGT' && <TGT />}
                        </div>
                    </Tab>

                    <Tab eventKey="PRT" title="PRT">
                        <div className={TeacherStyle.tabContent}>
                            {activeTab === 'PRT' && <PRT />}
                        </div>
                    </Tab>

                    <Tab eventKey="German" title="German Language Department">
                        <div className={TeacherStyle.tabContent}>
                            {activeTab === 'German' && <GermanLanguage />}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </section>
    );
};

export default StaffTabSection;
