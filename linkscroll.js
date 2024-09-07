document.addEventListener("DOMContentLoaded", function() {

    // Define offset values for different classes
    const scrollTriggerOffsets = {
        scroll_trigger: 150,
        scroll_trigger_more: 320
    };

    // Select all anchor tags that have hrefs starting with "#"
    document.querySelectorAll(`a[href^="#"]`).forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            // Get the ID of the target element from the href attribute
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                let offset = 0;

                // Determine the offset based on the class of the clicked anchor
                for (const key in scrollTriggerOffsets) {
                    if (this.classList.contains(key)) {
                        offset = scrollTriggerOffsets[key];
                        break;
                    }
                }

                // Calculate the target position by adding the target element's top position to the current page offset, then subtract the determined offset
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});