import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import AboutSection from "@/components/pagesData/homepage/aboutSection"
import BannerSection from "@/components/pagesData/homepage/bannerSection"
import BelowBannerSection from "@/components/pagesData/homepage/belowBannerSection"
import HappyFacesSection from "@/components/pagesData/homepage/happyFacesSection"
import MissionSection from "@/components/pagesData/homepage/missionSection"
import OurSchoolSection from "@/components/pagesData/homepage/ourSchoolSection"
import PartnersSection from "@/components/pagesData/homepage/partnersSection"
import TabSection from "@/components/pagesData/homepage/tabSection"
import TestimonialSection from "@/components/pagesData/homepage/testimonialSection"
import ActivitiesSection from '@/components/pagesData/homepage/activitiesSection';

function Home() {
    return (
        <>
            <Header />
            <BannerSection />
            <BelowBannerSection />
            <AboutSection />
            <MissionSection />
            <TabSection />
            <OurSchoolSection />
            <ActivitiesSection />
            <HappyFacesSection />
            <TestimonialSection />
            <PartnersSection />
            <Footer />
        </>
    )
}

export default Home