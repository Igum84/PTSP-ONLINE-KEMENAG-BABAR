document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
        alert("Fitur " + item.innerText + " diklik!");
    });
});
