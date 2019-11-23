const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

// Not totally sure what I'm using this for Im just trying to adapt this from Friday's video
const calculator = {
    // not sure why I had '=' here instead of ':' I knew better.. ha
    calculation: 'Incoming Calculation',
    runningCalcTotal: 0,
}

// this needs to GET info from client input 
app.get('/api/calculator', (req,res) => {
    console.log('im working!!!')
    // const solveObject = req.body.solveObject;

    // const val1 = parseInt(solveObject.input1);
    // const val2 = parseInt(solveObject.input2);
    // const mathOp = 

    // couldn't take a number, has to be in an object like this
    
    res.send({runningCalcTotal: calculator.runningCalcTotal});
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