import Image from "next/image"
import DownloadStyle from './download.module.css'

const BannerSection = () => {
  return (
    <section className={DownloadStyle.banner_sec}>
      <Image
        src="/images/mandatoryDisclosure/mandatory-banner.jpg"
        alt="Icons"
        width={1920}
        height={430}
        style={{ width: '100%', height: 'auto' }}
      />
    </section>
  );
};

export default BannerSection;