document.getElementById('generate').addEventListener('click', async () => {
  const city = document.getElementById('city').value;
  const climateChange = document.getElementById('climate-change').value;
  const prompt = `A depiction of ${city} affected by ${climateChange}`;

  const images = await generateImages(prompt);
  document.getElementById('image1').src = images[0];
  document.getElementById('image2').src = images[1];
  document.getElementById('image3').src = images[2];
});

async function generateImages(prompt) {
  const apiKeys = {
    stableDiffusion: process.env.STABLE_DIFFUSION_API_KEY,
    openai: process.env.OPENAI_API_KEY,
    anotherProvider: process.env.ANOTHER_PROVIDER_API_KEY,
  };

  // Simulate API calls (replace with actual API calls)
  return [
    `https://via.placeholder.com/300?text=${encodeURIComponent(prompt + ' - Stable Diffusion')}`,
    `https://via.placeholder.com/300?text=${encodeURIComponent(prompt + ' - OpenAI')}`,
    `https://via.placeholder.com/300?text=${encodeURIComponent(prompt + ' - Another Provider')}`,
  ];
}

document.querySelectorAll('.download').forEach(button => {
  button.addEventListener('click', (e) => {
    const imgSrc = e.target.closest('.image-container').querySelector('img').src;
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = 'climate-change-image.png';
    link.click();
  });
});

document.querySelectorAll('.share').forEach(button => {
  button.addEventListener('click', (e) => {
    const platform = e.target.dataset.platform;
    const imgSrc = e.target.closest('.image-container').querySelector('img').src;
    const shareUrl = getShareUrl(platform, imgSrc);
    window.open(shareUrl, '_blank');
  });
});

function getShareUrl(platform, url) {
  switch (platform) {
    case 'whatsapp':
      return `https://wa.me/?text=${encodeURIComponent(url)}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    case 'instagram':
      return `https://www.instagram.com/?url=${encodeURIComponent(url)}`;
    case 'x':
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
    default:
      return '#';
  }
}
