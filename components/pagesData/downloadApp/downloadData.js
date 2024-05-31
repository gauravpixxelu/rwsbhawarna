import Image from "next/image"
import Link from "next/link"
import DownloadStyle from "./download.module.css";

const DownloadData = () => {
    return (
        <section className={DownloadStyle.downloaddata_sec}>
            <div className="container">
                <div className={`${DownloadStyle.row} row`}>
                    <div className="col-md-6">
                        <h3>Rainbow World School makes it faster and efficient  for parents to connect easily with us through our radical app</h3>
                        <div className={DownloadStyle.downloaddata_hdng}>
                            <p>Download from the link given below</p>
                            <Link href="https://play.google.com/store/apps/details?id=com.rainbowworldschool" target="_blank"><Image src="/images/android.svg" alt="Logos" width={800} height={800} style={{ width: '48%', height: 'auto', marginRight: '5px' }} /></Link>
                            <Link href="https://apps.apple.com/in/app/rainbow-world-school/id1618871963" target="_blank"><Image src="/images/playstore.svg" alt="Logos" width={800} height={800} style={{ width: '48%', height: 'auto', marginLeft: '5px' }} /></Link>
                            <Link href="Radicalseeds.com/login" target="_blank"><Image src="/images/window.svg" alt="Logos" width={800} height={800} style={{ width: '100%', height: 'auto', marginTop: '10px' }} /></Link>
                        </div>

                        <div className={DownloadStyle.download_follow}>
                            <h6>Follow us on</h6>
                            <div className={DownloadStyle.download_followbox}>
                                <Link href="https://www.facebook.com/rainbowworldbhawarna?mibextid=ZbWKwL" target="_blank"><Image src="/images/socialIcons/facebook.svg" alt="Logos" width={800} height={800} style={{ width: '100%', height: 'auto' }} /></Link>
                                <Link href="#" target="_blank"><Image src="/images/socialIcons/instagram.svg" alt="Logos" width={800} height={800} style={{ width: '100%', height: 'auto' }} /></Link>
                                <Link href="#" target="_blank"><Image src="/images/socialIcons/twitter.svg" alt="Logos" width={800} height={800} style={{ width: '100%', height: 'auto' }} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Image
                            src="/images/homepage/download-line.svg"
                            alt="Logos"
                            width={800}
                            height={800}
                            style={{ width: '100%', height: 'auto', marginBottom: '50px' }}
                        />
                        <Image
                            src="/images/homepage/student-img.png"
                            alt="Logos"
                            width={800}
                            height={800}
                            style={{ width: '100%', height: 'auto' }}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadData;