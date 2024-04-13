import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import BannerSection from '@/components/pagesData/overview/bannerSection';
import OverviewSection from '@/components/pagesData/overview/overviewSection';
import OurDreamSection from '@/components/pagesData/overview/ourDreamSection';

function Overview() {
    return (
        <>
            <Header />
            <BannerSection />
            <OverviewSection />
            <OurDreamSection />
            <Footer />
        </>
    )
}

export default Overview