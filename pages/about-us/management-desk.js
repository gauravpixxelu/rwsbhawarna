

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import BannerSection from '@/components/pagesData/headMembers/managementDesk/bannerSection';
import ManagementData from '@/components/pagesData/headMembers/managementDesk/managementData';

function ManagementDesk() {
    return (
        <>
            <Header />
            <BannerSection />
            <ManagementData />
            <Footer />
        </>
    )
}

export default ManagementDesk