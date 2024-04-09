import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import AboutSection from "@/components/homepage/aboutSection"
import BannerSection from "@/components/homepage/bannerSection"
import BelowBannerSection from "@/components/homepage/belowBannerSection"
import HappyFacesSection from "@/components/homepage/happyFacesSection"
import MissionSection from "@/components/homepage/missionSection"
import OurSchoolSection from "@/components/homepage/ourSchoolSection"
import PartnersSection from "@/components/homepage/partnersSection"
import TabSection from "@/components/homepage/tabSection"
import TestimonialSection from "@/components/homepage/testimonialSection"
import ActivitiesSection from '@/components/homepage/activitiesSection';

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