

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import BannerSection from '@/components/pagesData/headMembers/chairperson/bannerSection';
import ChairpersonData from '@/components/pagesData/headMembers/chairperson/chairpersonData';

function Chairperson() {
    return (
        <>
            <Header />
            <BannerSection />
            <ChairpersonData />
            <Footer />
        </>
    )
}

export default Chairperson