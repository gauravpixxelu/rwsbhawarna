import { useEffect } from 'react';

const BannerSection = () => {
    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';

        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        let player;

        window.onYouTubeIframeAPIReady = function () {
            player = new window.YT.Player('player', {
                height: '100%', // Adjusted to cover the full height of the container
                width: '100%',
                videoId: 'l62SIcbCPwo',
                playerVars: {
                    autoplay: 1,
                    modestbranding: 1,
                    rel: 0,
                    controls: 0,
                    loop: 1,
                    mute: 1
                },
                events: {
                    onReady: onPlayerReady
                }
            });
        };

        const onPlayerReady = (event) => {
            event.target.playVideo();
        };

        return () => {
            if (player) {
                player.destroy();
            }
        };
    }, []);

    return (
        <section className="banner_sec">
            {/* Add inline styles to ensure the video covers the full width and height */}
            <div id="player" style={{ width: '100%', height: '90vh' }}></div>
        </section>
    );
};

export default BannerSection;
