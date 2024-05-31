// Get buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    console.log('Previous button clicked');
});

nextBtn.addEventListener('click', () => {
    console.log('Next button clicked');
});

// Toggle dark theme
document.body.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
