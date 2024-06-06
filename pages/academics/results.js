import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import BannerSection from '@/components/pagesData/results/bannerSection';
import ResultsData from '@/components/pagesData/results/resultsData';

function Results() {
    return (
        <>
            <Header />
            <BannerSection />
            <ResultsData/>
            <Footer />
        </>
    )
}

export default Results;