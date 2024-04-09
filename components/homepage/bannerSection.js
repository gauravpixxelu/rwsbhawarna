import HomeCss from './home.module.css'

const BannerSection = () => {
  return (
    <section className="banner_sec">
      <div className={HomeCss.video_container}>
        <iframe
          src="https://player.vimeo.com/video/884200751?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          width="100%"
          height="500px"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default BannerSection;