// Toggle experience description visibility
const toggleButtons = document.querySelectorAll('.toggle-description');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const description = this.nextElementSibling; // Get the adjacent description div
        const isVisible = description.classList.contains('show');

        if (isVisible) {
            description.classList.remove('show');
            this.textContent = 'Click to View Description'; // Change button text
        } else {
            description.classList.add('show');
            this.textContent = 'Click to Hide Description'; // Change button text
        }
    });
});
