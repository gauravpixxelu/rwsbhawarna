import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import ChildrenSciencebanner from '@/components/pagesData/childrenScience/bannerSection';
import ChildrenScienceContent from '@/components/pagesData/childrenScience/childrenContent';
import ChildrenSlider from '@/components/pagesData/childrenScience/childrenSlider';

function ChildrenScienceCongress() {
    return (
        <>
            <Header />
            <ChildrenSciencebanner />
            <ChildrenScienceContent />
            <ChildrenSlider />
            <Footer />
        </>
    )
}

export default ChildrenScienceCongress;