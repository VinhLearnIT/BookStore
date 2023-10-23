import "./module-header.js";

let trashProduct = document.querySelectorAll('.product__trash');
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
