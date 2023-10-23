import "./module-header.js";
import "./module-animated.js"
import BookActions from "./module-bookaction.js";
BookActions();

let rangeMinPrice = document.querySelector('.silder__price-min');
let rangeMaxPrice = document.querySelector('.silder__price-max');
let progressValue = document.querySelector('.filter__progress .progress__value');
let minGap = 50;

if (rangeMinPrice && rangeMaxPrice && progressValue) {
    rangeMinPrice.addEventListener('input', (e) => {
        let minPriceText = document.querySelector('.filter__price-value .min__price');
        let minValue = parseInt(rangeMinPrice.value);
        let maxValue = parseInt(rangeMaxPrice.value);
        if (maxValue - minValue >= minGap) {
            progressValue.style.left = `${(minValue / 500) * 100}%`;
            minPriceText.innerHTML = `$ ${minValue}`
        } else {
            rangeMinPrice.value = maxValue - minGap;
        }
    });
    rangeMaxPrice.addEventListener('input', (e) => {
        let maxPriceText = document.querySelector('.filter__price-value .max__price');
        let minValue = parseInt(rangeMinPrice.value);
        let maxValue = parseInt(rangeMaxPrice.value);
        if (maxValue - minValue >= minGap) {
            progressValue.style.right = `${100 - ((maxValue / 500) * 100)}%`;
            maxPriceText.innerHTML = `$ ${maxValue}`
        } else {
            rangeMaxPrice.value = minValue + minGap;
        }
    });
}


let categoryBtnIcons = document.querySelectorAll('.category__btn-icon'),
    authorBtnIcons = document.querySelectorAll('.author__btn-icon');

if (categoryBtnIcons && authorBtnIcons) {
    categoryBtnIcons.forEach((item) => {
        item.addEventListener('click', (e) => {
            let element = e.target.closest('.active');
            let elementTarget = element.dataset.target
            document.querySelector('.category__btn-icon:not(.active)').classList.add('active');
            element.classList.remove('active');
            document.querySelector(elementTarget).classList.toggle('show');
        });
    })

    authorBtnIcons.forEach((item) => {
        item.addEventListener('click', (e) => {
            let element = e.target.closest('.active');
            let elementTarget = element.dataset.target
            document.querySelector('.author__btn-icon:not(.active)').classList.add('active');
            element.classList.remove('active');
            document.querySelector(elementTarget).classList.toggle('show');
        });
    })
}


let selectSort = document.querySelector('.select__box .select__sort'),
    optionSelect = document.querySelector('.filter__sort .option__select');
if (selectSort && selectSort) {
    let optionItem = optionSelect.querySelectorAll('.option__item');
    selectSort.addEventListener('click', () => {
        optionSelect.classList.toggle('show');
    })

    optionItem.forEach((item) => {
        item.addEventListener('click', (e) => {
            selectSort.innerHTML = e.target.innerHTML;
            optionSelect.classList.remove('show');
        })
    })
}




