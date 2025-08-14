document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
        const target = item.getAttribute("data-link");
        if (target) {
            window.location.href = target;
        }
    });
});
