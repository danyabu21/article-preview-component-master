const btnShare = document.querySelector('.btn-share');

console.log(btnShare)

function addActive() {
    btnShare.classList.toggle('active')
}

btnShare.addEventListener('click', addActive)