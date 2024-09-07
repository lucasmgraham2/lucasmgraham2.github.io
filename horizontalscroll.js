window.addEventListener('scroll', (e) => {
    stickyElement = document.querySelector('.sticky');
    transform(stickyElement);
    const parent = stickyElement.parentElement;
    const parentRect = parent.getBoundingClientRect();
    
    // If the top of the parent has scrolled past the top of the viewport and we haven't reached the parent's bottom
    if (parentRect.top <= 0 && parentRect.bottom > stickyElement.offsetHeight) {
        stickyElement.style.position = 'fixed';
        stickyElement.style.top = '0';
        stickyElement.style.bottom = 'initial';
        stickyElement.style.width = `${parentRect.width}px`;
    }

    // Reset the sticky element to its relative position if scrolling above the parent
    else {
        stickyElement.style.position = 'relative';
    }
})

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;

    // Scrolls according to the pixels and not sections
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight)* 100;
    percentage = percentage < 0 ? 0 : percentage > 250 ? 250 : percentage;

    // Scrolls according to the sections based on individual pixel percentage location
    if (percentage > 60 && percentage < 110) {
        percentage = 100;
    }
    if (percentage > 160 && percentage < 250) {
        percentage = 300;
    }
    if (percentage > 110 && percentage < 160) {
        percentage = 200;
    }
    if (percentage < 60) {
        percentage = 0;
    }
    
    // Edits the CSS to scroll to the correct section
    document.querySelector('.scroll_section').style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}