const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    // Function to show cards with animation
    function showCards(category) {
        serviceCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                // Remove old .show to reset animation
                card.classList.remove('show');
                // Delay required to trigger transition
                setTimeout(() => card.classList.add('show'), 10);
            } else {
                card.classList.remove('show');
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    }

    // Filter button click
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            showCards(category);
        });
    });

    // Show all cards on first load
    window.addEventListener('DOMContentLoaded', () => {
        showCards('all');
    });