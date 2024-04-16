import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import BannerSection from '@/components/pagesData/contactUs/bannerSection';
import MapSection from '@/components/pagesData/contactUs/mapSection';
import ContactData from '@/components/pagesData/contactUs/contactData';

function ContactUs() {
    return (
        <>
            <Header />
            <BannerSection />
            <ContactData />
            <MapSection />
            <Footer />
        </>
    )
}

export default ContactUs