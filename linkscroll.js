document.addEventListener("DOMContentLoaded", function() {

    const scrollTriggerClass = "scroll_trigger";
    const scrollTriggerMore = "scroll_trigger_more";

    document.querySelectorAll(`a.${scrollTriggerMore}[href^="#"]`).forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 320;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    document.querySelectorAll(`a.${scrollTriggerClass}[href^="#"]`).forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 150;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});