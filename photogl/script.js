function showMore() {
    const hiddenImages = document.querySelectorAll('.gallery .hidden');
    hiddenImages.forEach(img => img.classList.remove('hidden'));

    document.getElementById('show-more').classList.add('hidden');
    document.getElementById('collapse').classList.remove('hidden');
}

function collapse() {
    const allImages = document.querySelectorAll('.gallery img');
    for (let i = 8; i < allImages.length; i++) {
        allImages[i].classList.add('hidden');
    }

    document.getElementById('collapse').classList.add('hidden');
    document.getElementById('show-more').classList.remove('hidden');
    document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('show-more').addEventListener('click', showMore);
document.getElementById('collapse').addEventListener('click', collapse);
