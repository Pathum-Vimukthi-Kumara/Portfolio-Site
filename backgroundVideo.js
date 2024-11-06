// backgroundVideo.js
document.addEventListener('DOMContentLoaded', function () {
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-background';
  
    const video = document.createElement('video');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.className = 'video';
  
    const source = document.createElement('source');
    source.src = 'media/background.mp4'; // Path to your video file
    source.type = 'video/mp4';
  
    video.appendChild(source);
    videoContainer.appendChild(video);
    document.body.appendChild(videoContainer);
  });
 
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll
    });
});
  