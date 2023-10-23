import ToastMessage, { TYPE_SUCCESS, TYPE_ERROR, TYPE_WARNING, TYPE_INFO } from "./module-toast.js";

function BookActions() {
    let bookItems = document.querySelectorAll('.book__item .book__img');
    const SHOP_STORAGE_KEY = 'ShopBook';
    bookItems.forEach(bookItem => {
        bookItem.addEventListener('click', (e) => {
            let config = JSON.parse(localStorage.getItem(SHOP_STORAGE_KEY)) || {};
            config['srcImage'] = e.target.currentSrc;
            localStorage.setItem(SHOP_STORAGE_KEY, JSON.stringify(config));
        });
    })

    let btnAddItem = document.querySelectorAll('.book__item .book__add');
    btnAddItem.forEach((item) => {
        item.addEventListener('click', () => {
            ToastMessage(TYPE_SUCCESS, 'Success Message', 'Product added successfully', 4);
        })
    })
}

export default BookActions;