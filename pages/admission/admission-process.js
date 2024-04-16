import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import AdminssionServicesSection from '@/components/pagesData/admission/adminssionServicesSection';
import BannerSection from "@/components/pagesData/admission/bannerSection"
import DocumentSection from '@/components/pagesData/admission/documentSection';

function Home() {
    return (
        <>
            <Header />
            <BannerSection />
            <DocumentSection />
            <AdminssionServicesSection />
            <Footer />
        </>
    )
}

export default Home