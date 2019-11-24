$(document).ready(init);

function init() {
    console.log('JS/JQ')
    $('.js-addition-btn').on('click', onClickAdd);
    $('.js-subtract-btn').on('click', onClickSubtract);
    $('.js-multiply-btn').on('click', onClickMultiply);
    $('.js-divide-btn').on('click', onClickDivide);
    $('.js-equal-btn').on('click', onClickEqual);
    $('.js-clear-btn').on('click', onClickClear);
    getCalculator();
}; 
// API Calls

function getCalculator() {
    $.ajax({
        method: 'GET',
        url: '/api/calculator',
    })
    .then(function(response) {
        console.log('GET Response: ', response);
        //render(response);
    })
    .catch(function(err) {
        console.log('GET Error: ', err)
    });
};

// View Update

function render(calculatorInfo) {
    const $calcBalance = $('.js-answer-list');

    $calcBalance.append(`
        ${calculatorInfo.calcBalance}
    `)

}

// button configuration
function onClickAdd(event) {
    mathOp = "add";
};
function onClickSubtract(event) {
    mathOp = "sub";
};
function onClickMultiply(event) {
    mathOp = "mult";
};
function onClickDivide(event) {
    mathOp = "divi";
};
function onClickEqual(event) {
    console.log('I work');
}
function onClickClear(event) {
    console.log('I work');
}
