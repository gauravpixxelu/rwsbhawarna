

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import BannerSection from '@/components/pagesData/mandatoryDisclosure/bannerSection';
import GeneralInfoSection from '@/components/pagesData/mandatoryDisclosure/generalInfoSection';
import DocumentInfoSection from '@/components/pagesData/mandatoryDisclosure/documentInfoSection';
import ResultsAcademicsSection from '@/components/pagesData/mandatoryDisclosure/resultsAcademicsSection';

function MandatoryDisclosure() {
    return (
        <>
            <Header />
            <BannerSection />
            <GeneralInfoSection />
            <DocumentInfoSection />
            <ResultsAcademicsSection />
            <Footer />
        </>
    )
}

export default MandatoryDisclosure