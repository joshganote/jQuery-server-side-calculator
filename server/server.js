const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/solve' (req,res) =>{
    const solve = req.body.solve;

    if ()
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