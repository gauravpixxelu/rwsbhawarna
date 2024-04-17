import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import BannerSection from "@/components/pagesData/facilities/bannerSection"
import FacilitiesData from '@/components/pagesData/facilities/facilitiesData';

function Facilities() {
    return (
        <>
            <Header />
            <BannerSection />
            <FacilitiesData />
            <Footer />
        </>
    )
}

export default Facilities