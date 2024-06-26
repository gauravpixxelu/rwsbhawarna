import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import BannerSection from '@/components/pagesData/pressReview/bannerSection';
import PressSection from '@/components/pagesData/pressReview/pressSection';
import PressGallery from '@/components/pagesData/pressReview/pressGallery';

function PressReview() {
    return (
        <>
            <Header />
            <BannerSection />
            <PressSection />
            <PressGallery/>
            <Footer />
        </>
    )
}

export default PressReview