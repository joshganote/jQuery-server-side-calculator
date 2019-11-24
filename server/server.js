const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

// Not totally sure what I'm using this for Im just trying to adapt this from Friday's video
const calculator = {
    
    calculation: 'Incoming Calculation',
    runningCalcTotal: 0,
};

// this needs to GET info from client input... I believe this working 
app.get('/api/calculator', (req,res) => {
    //console.log('im working!!!')
    res.send({runningCalcTotal: calculator.runningCalcTotal});
});

// I need this to handel all math operations... not sure how to test this in Postman yet
app.post('/api/mathoperations', (req,res) => {
    const mathObject = parseFloat(req.body.mathObject);

    const val1 = parseInt(mathObject.input1);
    const val2 = parseInt(mathObject.input2);
    const mathOp = req.body.mathOp;
    if ( req.body.mathOp === "add") {
        answer = val1 + val2;
        //res.send(201);
    } else if ( req.body.mathOp === "sub"){
        answer = val1 - val2;
        //res.send(201);
    } else if ( req.body.mathOp === "mult"){
        answer = val1 * val2;
        //res.send(201);
    } else if ( req.body.mathOp === "divi"){
        answer = val1 / val2;
        //res.send(201);
    } else {
        res.send(500);
    }
    res.send({mathObject});
});

// this needs to capture calculator input from client side when '=' is pressed and POST to server
app.post('/api/equalsign', (req,res) => {
    const equalBtn = parseFloat(req.body.equalBtn).toFixed(2);
    console.log(equalBtn);
    
    if (equalBtn) {
        calculator.runningCalcTotal += equalBtn;
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