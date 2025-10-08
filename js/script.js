document.addEventListener('DOMContentLoaded', function() {
    // This function creates a fun typing animation.
    function typeEffect(element, text, speed, callback) {
        let i = 0;
        element.innerHTML = ""; // Clear the text first
        
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else if (callback) {
                callback(); // Call the next function when done
            }
        }
        typing();
    }

    // Select the title and subtitle on the homepage
    const heroTitle = document.querySelector('.welcome-text h1');
    const heroSubtitle = document.querySelector('.welcome-text .subtitle');

    // Only run the animation if we are on the homepage (where these elements exist)
    if (heroTitle && heroSubtitle) {
        const titleText = heroTitle.textContent;
        const subtitleText = heroSubtitle.textContent;

        // Start the animation
        typeEffect(heroTitle, titleText, 120, () => {
            // After the title is typed, type the subtitle
            typeEffect(heroSubtitle, subtitleText, 75);
        });
    }
});