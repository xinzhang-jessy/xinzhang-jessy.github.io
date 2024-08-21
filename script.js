document.addEventListener("DOMContentLoaded", function() {
    // Display "Major Work" by default
    document.querySelector('#major-work').classList.remove('hidden');
    document.querySelector('.sidebar ul li.active ul li:first-child').classList.add('active');

    // Handle navigation clicks
    document.querySelectorAll('.sidebar ul li ul li a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all links
            document.querySelectorAll('.sidebar ul li ul li').forEach(function(item) {
                item.classList.remove('active');
            });

            // Hide all sections
            document.querySelectorAll('.main-content section').forEach(function(section) {
                section.classList.add('hidden');
            });

            // Add active class to clicked link
            link.parentElement.classList.add('active');

            // Show the corresponding section
            const target = link.getAttribute('href');
            document.querySelector(target).classList.remove('hidden');
        });
    });
});
