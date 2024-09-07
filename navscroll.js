window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (window.innerWidth > 900) {
        const name = document.querySelector('.navbar_name');
        const nav = document.querySelector('.navbar_container');
        const space = document.querySelector('.spacing');

        // Get current scroll position
        const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

        // Scroll behavior when page is scrolled past 50px
        if (scrollPosition > 50) {
            updateNavbarStyles({
                margin: "0px",
                backgroundColor: "#282828",
                height: "60px",
                nameFontSize: "1.5em",
                paddingRight: "10px"
            });
        }
        // Scroll behavior when at the top of the page
        else {
            const paddingRight = window.innerWidth < 1200 ? "20px" : "80px";
            updateNavbarStyles({
                margin: "2%",
                backgroundColor: "transparent",
                height: "100px",
                nameFontSize: "40px",
                paddingRight
            });
        }

        // Helper function to apply styles
        function updateNavbarStyles({ margin, backgroundColor, height, nameFontSize, paddingRight }) {
            nav.style.margin = margin;
            nav.style.backgroundColor = backgroundColor;
            nav.style.height = height;
            name.style.fontSize = nameFontSize;
            space.style.paddingRight = paddingRight;
        }
    }
}