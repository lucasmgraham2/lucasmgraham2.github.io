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

    if (window.innerWidth > 900) {
        dropdown.style.display = 'flex';
    } else {
        dropdown.style.display = 'none';
    }
});