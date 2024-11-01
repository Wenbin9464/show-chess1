let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let item = container.querySelectorAll('.list .item');
let indictors = document.querySelector('.indicators');
let dots = indictors.querySelectorAll('ul li');
let list = container.querySelector('.list');
let description = document.querySelector('.description');
let carInfo = document.querySelector('.car-information');
let h2 = document.querySelector('h2');
let active = 0;
let firstPosition = 0;
let lastPosition = item.length - 1;

prevButton.onclick = () => {
    active = (active === firstPosition) ? lastPosition : active - 1;
    setSlider();
}
nextButton.onclick = () => {
    active = (active === lastPosition) ? firstPosition : active + 1;
    setSlider();
}

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) itemOld.classList.remove('active');
    let dotsOld = indictors.querySelector('ul li.active');
    if (dotsOld) dotsOld.classList.remove('active');

    item[active].classList.add('active');
    dots[active].classList.add('active');
    indictors.querySelector('.number').innerHTML = '0' + (active + 1);
    let activeItem = item[active];
    let activeDescription = activeItem.querySelector('.description');
    let activeCarInfo = activeItem.querySelector('.car-information');
    let activeH2 = activeItem.querySelector('h2');
    indictors.querySelectorAll('ul li').forEach((li) => {
        li.style.backgroundColor = ''; // Reset to default
    });
    
}
setSlider();
