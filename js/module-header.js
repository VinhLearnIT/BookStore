let header = document.querySelector('#header');

let userAction = document.querySelector('.user__actions');
let actionList = document.querySelector('.action__list');
userAction.addEventListener('click', () => {
    actionList.classList.toggle('show');
});