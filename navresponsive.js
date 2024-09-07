document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('.dropdown_btn').addEventListener('click', function() {
        const dropdown = document.querySelector('.dropdown');

        // If the dropdown is hidden or not displayed, show it
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'flex';
        } 
        else {
            dropdown.style.display = 'none';
        }
    });

});