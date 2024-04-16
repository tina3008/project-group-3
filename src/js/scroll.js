
const mobileWindow = document.querySelector('#mobail-menu');
const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', e=> {
        e.preventDefault();
        mobileWindow.classList.remove('is-open');

        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};