document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('.dropdown_btn').addEventListener('click', function() {
        console.log("Button clicked!");
        const dropdown = document.querySelector('.dropdown');
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'flex';
        } 
        else {
            dropdown.style.display = 'none';
        }
    });
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            dropdown.style.display = 'flex'; // Ensure dropdown is visible on larger screens
        } else if (dropdown.style.display !== 'flex') {
            dropdown.style.display = 'none'; // Maintain state for small screens
        }
    });

    // Initial check when the page loads
    if (window.innerWidth > 900) {
        dropdown.style.display = 'flex';
    } else {
        dropdown.style.display = 'none';
    }
});