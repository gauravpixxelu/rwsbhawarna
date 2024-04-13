import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import BannerSection from '@/components/pagesData/overview/bannerSection';
import OverviewData from '@/components/pagesData/overview/overviewData';

function Overview() {
    return (
        <>
            <Header />
            <BannerSection />
            <OverviewData />
            <Footer />
        </>
    )
}

export default Overview