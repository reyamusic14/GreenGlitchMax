const generateBtn = document.getElementById('generate-btn');
const promptInput = document.getElementById('prompt');
const generatedImage = document.getElementById('generated-image');
const statusText = document.getElementById('status');

// Replace these placeholders with your actual API keys
const STABLE_DIFFUSION_API_KEY = 'YOUR_STABLE_DIFFUSION_API_KEY';
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; 

generateBtn.addEventListener('click', async () => {
    const prompt = promptInput.value;
    if (!prompt) {
        alert('Please enter a prompt!');
        return;
    }
  
    statusText.innerText = 'Generating image...';
  
    try {
        // Placeholder for API call to Stable Diffusion
        const response = await fetch('https://api.stablediffusionapi.com/v1/generate', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${STABLE_DIFFUSION_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });
        
        if (!response.ok) throw new Error('Failed to generate image.');

        const data = await response.json();
        generatedImage.src = data.imageUrl;  // Adjust as necessary based on API response format
        statusText.innerText = 'Image generated!';
    } catch (error) {
        console.error('Error:', error);
        statusText.innerText = 'Error generating image.';
    }
});
