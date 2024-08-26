document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('.dropdown_btn').addEventListener('click', function() {
        console.log("Button clicked!");
        const dropdow = document.querySelector('.dropdown');
        if (dropdow.style.display === 'none' || dropdow.style.display === '') {
            dropdow.style.display = 'flex';
        } 
        else if (window.innerWidth > 900){
            dropdow.style.display = 'flex';
        }
        else {
            dropdow.style.display = 'none';
        }
    });
});