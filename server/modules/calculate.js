const express = require( 'express' );
const router = express.Router();
let calculationHistory = []
let newCalculation = {}
let solutionDisplay = {}
//routes

router.post ( '/', (req,res) =>{ //I am not sure if this is correct. Should '/calculator' go here instead?
    console.log('in /calculate/   POST:', req.body); 
    //calculations function here;
    let newSolution = addition( req.body.firstNum, req.body.secondNum);
    solutionDisplay.newSolution = newSolution;
    console.log(solutionDisplay);
    newCalculation.firstNum = req.body.firstNum;
    newCalculation.operator = req.body.operator;
    newCalculation.secondNum = req.body.secondNum;
    newCalculation.solution = newSolution;
    //push to history array here;
    calculationHistory.push( newCalculation );
    console.log( newCalculation );
    res.sendStatus( 200 );
})

module.exports = router;

//calculation functions

function addition( firstNum, secondNum ){
    let solution = Number( firstNum ) + Number( secondNum );
    return solution;
}