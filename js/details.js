import "./module-header.js";
import BookActions from "./module-bookaction.js";

BookActions();

let detailsImage = document.querySelector('.details__image .details__img');
const SHOP_STORAGE_KEY = 'ShopBook';

(
    function() {
        let config = JSON.parse(localStorage.getItem(SHOP_STORAGE_KEY)) || {};
        detailsImage.src = config.srcImage;
    }
)();


