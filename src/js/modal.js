const clicks = document.querySelectorAll(".click-js");
const backdrop = document.querySelector(".backdrop");

clicks.forEach(click => {
    click.addEventListener("click", modalClose);
});

document.addEventListener("keydown", closeHandle);

function modalClose() {
    backdrop.classList.remove("is-open");
}

function closeHandle(e) {
    if (e.code === "Escape") {
        modalClose();
    }
}
