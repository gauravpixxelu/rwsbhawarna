import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeCss from './home.module.css';

const VideoSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
  };

  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className={`${HomeCss.banner_sec} banner-slider`} style={{ overflow: 'hidden', height: '730px', position: 'relative', }}>
      <div className={HomeCss.video_container} style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
        <div style={{ position: 'relative', top: '-130px',  }}>
          {!videoError ? (
            <video
              ref={videoRef}
              style={{ width: '100%', height: '730', objectFit: 'cover' }}
              autoPlay
              loop
              muted={isMuted}
              onError={handleVideoError}
            >
              <source src="video/banner-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>
              Failed to load video.
            </div>
          )}
          <button
            onClick={handleMuteToggle}
            style={{
              position: 'relative',
              bottom: '300px',
              left: '10px',
              padding: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </div>
      <h2 className={HomeCss.banner_txt}>Rainbow World School</h2>
    </section>
  );
};

export default VideoSlider;
