// Open the Reels fullscreen section when clicked
document.getElementById("reelsBtn").addEventListener("click", function() {
  document.getElementById("reelsFullscreen").style.display = "flex";  // Show the fullscreen Reels section
});

// Close the Reels fullscreen section
document.getElementById("closeReels").addEventListener("click", function() {
  document.getElementById("reelsFullscreen").style.display = "none";  // Hide the fullscreen Reels section
});

// Initialize Intersection Observer to detect when videos come into view
let videos = document.querySelectorAll(".reel video");

// Function to handle video play/pause based on scroll position
function handleVideoPlay(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // Play the video when it enters the viewport
          entry.target.play();
      } else {
          // Pause the video when it leaves the viewport
          entry.target.pause();
      }
  });
}

// Set up Intersection Observer options (to play when video is at least 50% visible)
const options = {
  threshold: 0.5 // Play when at least 50% of the video is visible
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver(handleVideoPlay, options);

// Observe each video element
videos.forEach(video => {
  observer.observe(video);
});
