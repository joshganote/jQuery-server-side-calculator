$(document).ready(init);

function init() {
    console.log('JS/JQ')
    $('.js-addition-btn').on('click', onClickAdd);
    $('.js-subtract-btn').on('click', onClickSubtract);
    $('.js-multiply-btn').on('click', onClickMultiply);
    $('.js-divide-btn').on('click', onClickDivide);
    $('.js-submit-btn').on('click', onSubmitEquation);
    $('.js-clear-btn').on('click', onClickClear);
    getCalculator();
    
}; 

function onSubmitEquation(event){
    event.preventDefault();
    
    const answerList = $('.js-answer-list');
    let calcAmount = answerList.val();
    console.log('Calculate Amount:', calcAmount)
    calcAmount = parseFloat(calcAmount);
    parseFloat(answerList);

    const calculatorObject = {
        input1: $('.js-first-value').val(),
        math: mathOp,
        input2 : $('.js-second-value').val(),
    }
    console.log(calculatorObject);
    postMathOperations(calcAmount);
    
}

// API Calls
// Get
function getCalculator() {
    $.ajax({
        method: 'GET',
        url: '/api/calculator',
    })
    .then(function(response) {
        console.log('GET Response: ', response);
        render(response);
    })
    .catch(function(err) {
        console.log('GET Error: ', err)
    });
};

// Post 
function postMathOperations(calculate){
    const data = {
        calculate: calculate,
    };
    console.log('POST Calculate: ', data);
    $.ajax({
        method: 'POST',
        url: '/api/mathoperations',
        data: data
    })
    .then(function(response) {
        console.log('POST Response: ', response);
        render(response);
    })
    .catch(function(err) {
        console.log('POST Error: ', err)
    });
}

// Math Operators
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

// clear inputs
function onClickClear(event) {

    $('.js-first-value').val('');
    $('.js-second-value').val('');
    
}

// View Update
function render(calculatorInfo) {
    const $balanceList = $('.js-balance-list');

    $balanceList.empty();
    $balanceList.append(`
        ${calculatorInfo.balance}
    `)

};