window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    if(window.innerWidth > 900) {
        const name = document.querySelector('.navbar_name');
        const nav = document.querySelector('.navbar_container');
        const space = document.querySelector('.spacing');
        const text_items = document.querySelector('.nav_link');
        const nav_items = document.querySelector('.nav_items');
        const dropdown = document.querySelector('.dropdown');
        
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            //nav container smaller and adds background color
            nav.style.margin="0px";
            nav.style.backgroundColor="#282828";
            nav.style.height="60px";
            nav.style.width="95.99%";
            name.style.fontSize="1.5em";

            //spacing between name and links is smaller
            space.style.paddingRight="10px";

            
        }
        else {

            nav.style.margin="2%";
            nav.style.backgroundColor="transparent";
            nav.style.height="100px";

            name.style.fontSize="40px";
        
            //spacing between name and links is larger
            space.style.paddingRight="80px";
            if(window.innerWidth < 1200) {
                space.style.paddingRight="20px";
            }
        }
    }
    
}

