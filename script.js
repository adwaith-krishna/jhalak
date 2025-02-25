document.addEventListener('DOMContentLoaded', () => {
    // Animate JHALAK 2025
    const jhalakElement = document.querySelector('.jhalak-text');
    const jhalakText = jhalakElement.textContent;
    
    // Clear the text content to prepare for animation
    jhalakElement.textContent = '';
    
    // Create spans for each letter in JHALAK 2025
    for (let i = 0; i < jhalakText.length; i++) {
        const span = document.createElement('span');
        span.textContent = jhalakText[i] === ' ' ? '\u00A0' : jhalakText[i];
        jhalakElement.appendChild(span);
    }
    
    // Make the entire text element visible
    jhalakElement.style.opacity = 1;
    
    // Animate each letter with a staggered delay
    const jhalakSpans = jhalakElement.querySelectorAll('span');
    jhalakSpans.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = 1;
            span.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Animate Coming Soon after JHALAK animation
    setTimeout(() => {
        const comingSoonElement = document.querySelector('.coming-soon-text');
        const comingSoonText = comingSoonElement.textContent;
        
        // Clear the text content to prepare for animation
        comingSoonElement.textContent = '';
        
        // Create spans for each letter in Coming Soon
        for (let i = 0; i < comingSoonText.length; i++) {
            const span = document.createElement('span');
            span.textContent = comingSoonText[i] === ' ' ? '\u00A0' : comingSoonText[i];
            comingSoonElement.appendChild(span);
        }
        
        // Make the entire text element visible
        comingSoonElement.style.opacity = 1;
        
        // Animate each letter with a staggered delay
        const comingSoonSpans = comingSoonElement.querySelectorAll('span');
        comingSoonSpans.forEach((span, index) => {
            setTimeout(() => {
                span.style.opacity = 1;
                span.style.transform = 'translateY(0)';
            }, 100 * index);
        });
        
        // Activate the subtitle animation after both text animations
        setTimeout(() => {
            const subtitle = document.querySelector('.subtitle');
            subtitle.classList.add('active');
        }, 100 * comingSoonText.length + 300);
        
        // Add glitch effects to both texts
        setInterval(() => {
            // Apply glitch to random letters in JHALAK
            jhalakSpans.forEach(span => {
                if (Math.random() < 0.1) {
                    span.style.textShadow = `
                        ${Math.random() * 5}px ${Math.random() * 5}px ${Math.random() * 7}px rgba(255, 157, 0, 0.7),
                        ${Math.random() * -5}px ${Math.random() * 5}px ${Math.random() * 7}px rgba(0, 255, 255, 0.7)
                    `;
                    
                    setTimeout(() => {
                        span.style.textShadow = '0 0 15px rgba(255, 157, 0, 0.5)';
                    }, 100 + Math.random() * 200);
                }
            });
            
            // Apply glitch to random letters in Coming Soon
            comingSoonSpans.forEach(span => {
                if (Math.random() < 0.1) {
                    span.style.textShadow = `
                        ${Math.random() * 5}px ${Math.random() * 5}px ${Math.random() * 7}px rgba(0, 255, 255, 0.7),
                        ${Math.random() * -5}px ${Math.random() * 5}px ${Math.random() * 7}px rgba(255, 0, 255, 0.7)
                    `;
                    
                    setTimeout(() => {
                        span.style.textShadow = 'none';
                    }, 100 + Math.random() * 200);
                }
            });
        }, 2000);
        
    }, 100 * jhalakText.length + 500); // Start Coming Soon animation after JHALAK finishes
    
    // Handle window resize events to adjust for different devices
    window.addEventListener('resize', () => {
        // If needed, additional resize handling can be added here
        // This helps with dynamic adjustments beyond CSS media queries
    });
});