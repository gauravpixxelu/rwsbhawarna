import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import ChildrenSciencebanner from '@/components/pagesData/childrenScience/bannerSection';
import ChildrenScienceContent from '@/components/pagesData/childrenScience/childrenContent';
import ChildrenSlider from '@/components/pagesData/childrenScience/childrenSlider';
import ChildrenScienceCard from '@/components/pagesData/childrenScience/childrenCard'
function ChildrenScienceCongress() {
    return (
        <>
            <Header />
            <ChildrenSciencebanner />
            <ChildrenScienceContent />
            <ChildrenSlider />
            <ChildrenScienceCard/>
            <Footer />
           
</>
    )
}

export default ChildrenScienceCongress;