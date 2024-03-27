import HappyFacesSection from "@/components/homepage/happyFacesSection"
import MissionSection from "@/components/homepage/missionSection"
import OurSchoolSection from "@/components/homepage/ourSchoolSection"
import PartnersSection from "@/components/homepage/partnersSection"
import TestimonialSection from "@/components/homepage/testimonialSection"

function Home() {
    return (
        <>
            <MissionSection />
            <OurSchoolSection />
            <HappyFacesSection />
            <TestimonialSection />
            <PartnersSection />
           
        </>
    )
}

export default Home