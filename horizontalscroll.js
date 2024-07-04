// Purpose: To create a horizontal scroll effect for the Activities Section

window.addEventListener('scroll', (e) => {
    transform(document.querySelector('.sticky'))
})

function transform(section) {
    console.log(2)
    const offsetTop = section.parentElement.offsetTop;
    console.log(offsetTop)
    console.log(window.scrollY)

    // Scrolls according to the pixels and not sections
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight)* 100;
    percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage;
    console.log(4)

    // Scrolls according to the sections based on individual pixel percentage location
    if (percentage < 130 && percentage > 70) {
        percentage = 100;
    }
    if (percentage > 100) {
        percentage = 200;
    }
    if (percentage < 100) {
        percentage = 0;
    }

    // Edits the CSS to scroll to the correct section
    document.querySelector('.scroll_section').style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}