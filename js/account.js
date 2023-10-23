import './module-header.js';

let sidebarItem = document.querySelectorAll('.sidebar__item');
sidebarItem.forEach((item) => {
    item.addEventListener('click', (e) => {
        let element = e.target;
        let elementTarget = element.dataset.target
        document.querySelector('.account__content.active').classList.remove('active');
        document.querySelector(elementTarget).classList.add('active');
    })
})

// let inputAvatar = document.querySelector('.avatar__input input');
// let linkAvatar = undefined;
// inputAvatar.addEventListener('change', (e) => {
//     if (linkAvatar) {
//         URL.revokeObjectURL(linkAvatar)
//     }
//     let img = e.target.files[0];
//     linkAvatar = URL.createObjectURL(img)
//     let avatarImg = document.querySelector('.account__main .avatar img');
//     avatarImg.src = linkAvatar;
// })


let trashProduct = document.querySelectorAll('.order__trash');
let overlayModal = document.querySelector('.overlay');
let overlayNoAction = document.querySelector('.overlay .no__action');
trashProduct.forEach((item) => {
    item.addEventListener('click', () => {
        overlayModal.classList.add('show');
    })
})

overlayNoAction.addEventListener('click', () => {
    overlayModal.classList.remove('show');
})


let inputdate = document.querySelector('input[type="date"]');
inputdate.addEventListener('input', (e) => {
    console.log(e.target.value );
    let date = new Date(e.target.value);
    console.log(date.getDate(), date.getMonth()+1, date.getFullYear());
})
