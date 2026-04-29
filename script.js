document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.link-card');
    
    // Add staggered entrance animation for cards
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });

    // Add subtle hover effect for social icons
    const socials = document.querySelectorAll('.social-icon');
    socials.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.filter = 'drop-shadow(0 0 8px var(--accent-primary))';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.filter = 'none';
        });
    });

    // Console easter egg
    console.log('%c KuzenHub %c Built with ❤️ for Anime Fans', 
        'background: #6366f1; color: white; padding: 5px 10px; border-radius: 5px; font-weight: bold;',
        'color: #6366f1; font-weight: bold;'
    );
});
