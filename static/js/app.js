document.getElementById('cars').addEventListener('click', onClick);

function onClick(ev) {
    if (ev.target.classList.contains('more')) {
        const btn = ev.target;
        const describe = ev.target.parentElement.querySelector('.description')
        if (describe.style.display == 'block') {
            describe.style.display = ''
            ev.target.textContent = 'Show More'

        } else {
            ev.target.textContent = 'Hide'
            describe.style.display = 'block'
        }
    }
}