const layers = document.querySelectorAll('.layer');
const emojiContainer = document.getElementById('emoji-container');

// Divide scroll into thirds for each layer
const totalScroll = document.body.scrollHeight - window.innerHeight;
const scrollRanges = [
  [0.0, 0.33],
  [0.33, 0.66],
  [0.66, 1.0],
];

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scrollFraction = scrollY / totalScroll;

  layers.forEach((layer, index) => {
    const [start, end] = scrollRanges[index];
    let progress = (scrollFraction - start) / (end - start);

    if (progress < 0) {
      layer.style.opacity = 1;
      layer.style.transform = 'translate(-50%, -50%) scale(1)';
    } else if (progress > 1) {
      layer.style.opacity = 0;
      layer.style.transform = 'translate(-50%, -50%) scale(2)';
    } else {
      const scale = 1 + progress; // from 1 to 2
      layer.style.opacity = 1 - progress;
      layer.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }
  });

  // Reveal emoji container after final image is zoomed
  const brainLayerIndex = layers.length - 1;
const [, brainEnd] = scrollRanges[brainLayerIndex];

if (scrollFraction >= brainEnd) {
  emojiContainer.classList.remove('hidden');
} else {
  emojiContainer.classList.add('hidden');
}

document.querySelectorAll('#emoji-container a').forEach(link => {
    const delay = Math.random() * 3; // 0 to 3 seconds
    const duration = 5 + Math.random() * 3; // 5 to 8 seconds
    link.style.animationDelay = `${delay}s`;
    link.style.animationDuration = `${duration}s`;
  });
  
});
