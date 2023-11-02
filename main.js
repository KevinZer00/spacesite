for (let i = 0; i < 100; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * document.documentElement.scrollWidth + 'px';
    star.style.top = Math.random() * document.documentElement.scrollHeight + 'px';
    let size = Math.random() * 3 + 1; // Random size between 1px to 4px
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDuration = (Math.random() * 1 + 0.5) + 's'; // Random animation duration between 0.5s to 1.5s
    document.body.appendChild(star);
}

function createFallingStar() {
    let star = document.createElement('div');
    star.className = 'falling-star';
    star.style.left = Math.random() * document.documentElement.scrollWidth + 'px';
    star.style.top = Math.random() * document.documentElement.scrollHeight + 'px';
    let size = Math.random() * 2 + 2; // Random size between 2px to 4px
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDuration = (Math.random() * 2 + 1) + 's'; // Random animation duration between 1s to 3s
    document.body.appendChild(star);
    
    // Remove the star after its animation
    star.addEventListener('animationend', function() {
        star.remove();
    });
}


const heroSection = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

heroSection.addEventListener('mousemove', function(event) {
    const rect = heroSection.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    
    // Adjust the hover area size based on the viewport width
    let hoverAreaPercentage;
    if (viewportWidth < 480) {          // For very small screens (e.g., mobile portrait)
        hoverAreaPercentage = 0.2;
    } else if (viewportWidth < 768) {   // For small screens (e.g., mobile landscape)
        hoverAreaPercentage = 0.3;
    } else if (viewportWidth < 1024) {  // For medium screens (e.g., tablets)
        hoverAreaPercentage = 0.35;
    } else {                            // For large screens (e.g., desktops)
        hoverAreaPercentage = 0.2;
    }
    
    const hoverAreaWidth = rect.width * hoverAreaPercentage;
    const hoverAreaHeight = rect.height * hoverAreaPercentage;
    const hoverAreaLeft = (rect.width - hoverAreaWidth) / 2;
    const hoverAreaTop = (rect.height - hoverAreaHeight) / 2;

    // Check if cursor is within the hover area boundaries
    if (
        event.clientX >= hoverAreaLeft &&
        event.clientX <= hoverAreaLeft + hoverAreaWidth &&
        event.clientY >= hoverAreaTop &&
        event.clientY <= hoverAreaTop + hoverAreaHeight
    ) {
        heroContent.style.opacity = '0';
    } else {
        heroContent.style.opacity = '1';
    }
});


