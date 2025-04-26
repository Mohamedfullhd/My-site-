// Initialize download count
let downloadCount = localStorage.getItem('downloadCount') ? parseInt(localStorage.getItem('downloadCount')) : 0;

// Display the current download count
document.getElementById('download-count').textContent = `Downloads: ${downloadCount}`;

// Function to handle download click
document.getElementById('download-btn').addEventListener('click', () => {
    // Increment the download count
    downloadCount++;
    localStorage.setItem('downloadCount', downloadCount);

    // Update the displayed download count
    document.getElementById('download-count').textContent = `Downloads: ${downloadCount}`;

    // Open the download link (replace with your actual download URL)
    window.location.href = 'https://github.com/Mohamedfullhd/Upload-kernel-/releases/download/Colorox_kernel_v3/ColoroXKernel_ksu.zip';
});
