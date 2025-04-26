// Initialize download count
let downloadCount = localStorage.getItem('downloadCount') ? parseInt(localStorage.getItem('downloadCount')) : 0;

// Display the current download count
document.getElementById('download-count').textContent = `Downloads: ${downloadCount}`;

// Function to handle KSU download
document.getElementById('download-ksu').addEventListener('click', () => {
    // Increment the download count
    downloadCount++;
    localStorage.setItem('downloadCount', downloadCount);

    // Update the displayed download count
    document.getElementById('download-count').textContent = `Downloads: ${downloadCount}`;

    // Redirect to KSU version download link (replace with actual link)
    window.location.href = 'https://github.com/Mohamedfullhd/Upload-kernel-/releases/download/Colorox_kernel_v3/ColoroXKernel_ksu.zip';
});

// Function to handle Non-KSU download
document.getElementById('download-non-ksu').addEventListener('click', () => {
    // Increment the download count
    downloadCount++;
    localStorage.setItem('downloadCount', downloadCount);

    // Update the displayed download count
    document.getElementById('download-count').textContent = `Downloads: ${downloadCount}`;

    // Redirect to Non-KSU version download link (replace with actual link)
    window.location.href = 'https://github.com/Mohamedfullhd/Upload-kernel-/releases/download/Colorox_kernel_v3/ColoroXKernel.zip';
});
