

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import BannerSection from '@/components/pagesData/mandatoryDisclosure/bannerSection';
import GeneralInfoSection from '@/components/pagesData/mandatoryDisclosure/generalInfoSection';
import DocumentInfoSection from '@/components/pagesData/mandatoryDisclosure/documentInfoSection';
import StaffSection from '@/components/pagesData/mandatoryDisclosure/staffSection';
import ResultsAcademicsSection from '@/components/pagesData/mandatoryDisclosure/resultsAcademicsSection';
import ResultXSection from '@/components/pagesData/mandatoryDisclosure/resultsXSection';
import ResultXIISection from '@/components/pagesData/mandatoryDisclosure/resultsXIISection';
import SchoolInfrastructureSection from '@/components/pagesData/mandatoryDisclosure/schoolInfrastructureSection';

function MandatoryDisclosure() {
    return (
        <>
            <Header />
            <BannerSection />
            <GeneralInfoSection />
            <DocumentInfoSection />
            <ResultsAcademicsSection />
            <StaffSection />
            <ResultXSection />
            <ResultXIISection />
            <SchoolInfrastructureSection />
            <Footer />
        </>
    )
}

export default MandatoryDisclosure