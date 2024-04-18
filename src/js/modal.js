const clicks = document.querySelectorAll(".click-js");
const backdrop = document.querySelector(".backdrop");
const bodyHiden = document.querySelector('body');

clicks.forEach(click => {
    click.addEventListener("click", modalClose);
});

document.addEventListener("keydown", closeHandle);

function modalClose() {
    
    const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  body.style.height = '';
  body.style.overflowY = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  
    backdrop.classList.remove("is-open");
}

function closeHandle(e) {
    if (e.code === "Escape") {
        modalClose();
    }
}
