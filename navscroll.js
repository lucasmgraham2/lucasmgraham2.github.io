window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    const name = document.querySelector('.navbar_name');
    const nav = document.querySelector('.navbar_container');
    const space = document.querySelector('.spacing');
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.style.margin="0px";
        nav.style.backgroundColor="#282828";
        nav.style.maxHeight="70px";
        nav.style.width="95.99%";
        name.style.fontSize="1.5em";
        space.style.paddingRight="10px";
    }
    else {
        nav.style.margin="2%";
        nav.style.backgroundColor="transparent";
        name.style.fontSize="40px";
        nav.style.maxHeight="100px";
        space.style.paddingRight="200px";
    }
}