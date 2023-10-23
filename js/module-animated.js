function handleAnimated(el) {
    let element = el.getClientRects()[0];
    let heightScreen = window.innerHeight;
    if (element.bottom > 0 && element.top < heightScreen) {
        el.classList.add('start');
    } else {
        el.classList.remove('start');
    }
}

let elementAnimated = document.querySelectorAll('.animated-scroll');
window.addEventListener('scroll', () => {
    elementAnimated.forEach(elment => {
        handleAnimated(elment);
    })
}) 

window.addEventListener('load', () => {
    elementAnimated.forEach(elment => {
        handleAnimated(elment);
    })
}) 
