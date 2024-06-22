window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    const nav = document.querySelector('.navbar_container');
    const nav_items = document.querySelector('.nav_items');
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.style.margin="0px";
        nav.style.backgroundColor="#4f4f4f";
        nav_items.style.paddingLeft="4%";
        nav_items.style.paddingRight="0%";
        
    }
    else {
        nav.style.margin="2%";
        nav.style.backgroundColor="transparent";
        nav_items.style.paddingLeft="20%";
        nav_items.style.paddingRight="6%";

    }
}