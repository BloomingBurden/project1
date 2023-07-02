export const setCustomVideoPlayer = () => {
    const videoList = document.querySelectorAll('.custom-video');

    const progressVideo = (item, video) => {
        const progressLine = item.querySelector('.custom-video__current');

        let progress = video.currentTime / video.duration;

        progressLine.style.width = progress.toFixed(3) * 100 + '%';
    };


    const openFullscreen = (elem) => {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
        }
    }

    const onClickProgress = (item, video, evt) => {
        const progress = item.querySelector('.custom-video__progress');

        let x = (evt.pageX - progress.getBoundingClientRect().left) / progress.getBoundingClientRect().width;
        video.currentTime = x * video.duration;
    }

    const stopVideo = (video, item) => {
        item.classList.remove('custom-video-played');
        video.pause();
    };

    const startVideo = (video, item) => {
        item.classList.add('custom-video-played');
        item.classList.add('custom-video-playing');
        video.play();
    }

    const onStartVideo = (item, video, evt) => {
        const target = evt.target;
        
        if (!target.closest('.custom-video__bottom') || target.closest('.custom-video__play-small')) {
            if (video.paused) {
                startVideo(video, item);
            } else {
                stopVideo(video, item);
            }
        }
        

        if (target.closest('.custom-video__progress')) {
            onClickProgress(item, video, evt)
        }
        if (target.closest('.custom-video__full')) {
            openFullscreen(video)
        }
    };

    videoList.forEach(item => {
        const video = item.querySelector('video');

        item.addEventListener('click', onStartVideo.bind(null, item, video));
        video.addEventListener("timeupdate", progressVideo.bind(null, item, video), false);
    });
}