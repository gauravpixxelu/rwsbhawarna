import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import SchoolHousebanner from '@/components/pagesData/schoolHouses/bannerSection';
import SchoolHouseSec from '@/components/pagesData/schoolHouses/schoolHouseSec';
import SchoolManners from '@/components/pagesData/schoolHouses/schoolManners';
function SchoolHouse() {
    return (
        <>
            <Header />
            <SchoolHousebanner />
            <SchoolHouseSec />
            <SchoolManners/>
            <Footer />
        </>
    )
}

export default SchoolHouse