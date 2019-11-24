const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));
 

// Not totally sure what I'm using this for Im just trying to adapt 
// this from Friday's video
const calculator = {
    calculation: 'Incoming Calculation',
    balance: 0,
}
const equationHistory = [];
// this needs to GET info from client input... I believe this working 
app.get('/api/calculator', (req,res) => {
    console.log(typeof calculator.balance);// make sense right here. Thanks for the video

    res.send({balance: calculator.balance});
});

app.get('/api/history', (req,res) => {
    res.send(equationHistory);
});

// I need this to handle all math operations... not sure how to test this in Postman yet
app.post('/api/mathoperations', (req,res) => {
    
    const mathObject = req.body;

    const val1 = parseFloat(mathObject.input1);
    const val2 = parseFloat(mathObject.input2);
    const mathOp = mathObject.mathOp;
    
    // even though I can't get a sum of val1 and val2 in Postman        
    // with the 'if' statement, I am getting a console.log number
    // and not a string in terminal. I hope that will set me up for later
    if ( mathOp === "add") {
        answer = val1 + val2;
        mathObject.answer = answer;
        equationHistory.push(mathObject);
        console.log(equationHistory);
        res.send({answer: answer});
    } else if ( mathOp === "sub"){
        answer = val1 - val2;
        mathObject.answer = answer;
        equationHistory.push(mathObject);
        console.log(equationHistory);
        res.send({answer: answer});
    } else if ( mathOp === "mult"){
        answer = val1 * val2;
        mathObject.answer = answer;
        equationHistory.push(mathObject);
        console.log(equationHistory);
        res.send({answer: answer});
    } else if ( mathOp === "divi"){
        answer = val1 / val2;
        mathObject.answer = answer;
        equationHistory.push(mathObject);
        console.log(equationHistory);
        res.send({answer: answer});
    } else {
        res.send({message: 'Nice try'});
    }
});

// this needs to capture calculator input 
// from client side when '=' is pressed and POST to server
// not confident about this but says created in Postman
app.post('/api/equalsign', (req,res) => {
    const equalBtn = parseInt(req.body.equalBtn);
    
    if (equalBtn) {
        calculator.calcBalance += equalBtn;
        res.send(201);
    } else {
        res.send(500);
    }
});

app.listen(PORT, () => {
    console.log('listening on port:', PORT);
});






// const inputVal = {
//     firstInput: 
//     mathOperator:
//     secondInput:
//     total: 
// };