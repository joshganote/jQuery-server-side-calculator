$(document).ready(init);

function init() {
    console.log('JS/JQ')
    $('.js-addition-btn').on('click', onClickAdd);
    $('.js-subtract-btn').on('click', onClickSubtract);
    $('.js-multiply-btn').on('click', onClickMultiply);
    $('.js-divide-btn').on('click', onClickDivide);
    $('.js-equal-btn').on('click', onClickEqual);
    $('.js-clear-btn').on('click', onClickClear);
}; 

function onClickAdd(event) {
    console.log('I work');
    //mathOp
};
function onClickSubtract(event) {
    console.log('I work');
};
function onClickMultiply(event) {
    console.log('I work');
};
function onClickDivide(event) {
    console.log('I work');
};
function onClickEqual(event) {
    console.log('I work');
}
function onClickClear(event) {
    console.log('I work');
}