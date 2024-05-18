import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import BannerSection from "@/components/pagesData/galleries/bannerSection"
import GalleriesImages from "@/components/pagesData/galleries/galleriesImages";
function Galleries() {
    return (
        <>
            <Header />
            <BannerSection />
            <GalleriesImages/>     
            <Footer />
        </>
    )
}

export default Galleries