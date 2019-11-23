const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('server'));

const calculator = {
    calculation = 'Incoming Calculation',
    newCalcNumber = 0,
}

app.get('/api/calculator', (req,res) => {
    console.log('im working!!!')
    // const solveObject = req.body.solveObject;

    // const val1 = parseInt(solveObject.input1);
    // const val2 = parseInt(solveObject.input2);
    // const mathOp = 
    res.send({newCalcNumber: calculator.newCalcNumber });
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