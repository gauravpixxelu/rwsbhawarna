

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import BannerSection from '@/components/pagesData/headMembers/principle/bannerSection';
import PrincipalData from '@/components/pagesData/headMembers/principle/principalData';

function Principal() {
    return (
        <>
            <Header />
            <BannerSection />
            <PrincipalData />
            <Footer />
        </>
    )
}

export default Principal