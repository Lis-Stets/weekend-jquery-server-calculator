const express = require( 'express' );
const router = express.Router();
const calculationHistory = []
let newCalculation = {}
const solutionDisplay = {}
//routes

router.post ( '/', (req,res) =>{ //I am not sure if this is correct. Should '/calculator' go here instead?
    console.log('in /calculate/   POST:', req.body); 
    //calculations function here;
    newCalculation.firstNum = req.body.firstNum;
    newCalculation.operator = req.body.operator;
    newCalculation.secondNum = req.body.secondNum;

    if( req.body.operator === '+' ){
    let newSolution = addition( req.body.firstNum, req.body.secondNum);
    solutionDisplay.newSolution = newSolution;
    console.log(solutionDisplay);
    newCalculation.solution = newSolution;
    } //end addition if
    else if( req.body.operator === '-' ){
        let newSolution = subtraction( req.body.firstNum, req.body.secondNum);
        solutionDisplay.newSolution = newSolution;
        console.log(solutionDisplay);
        newCalculation.solution = newSolution;
    } // end subtraction else if
    else if( req.body.operator === '*' ){
        let newSolution = multiplication( req.body.firstNum, req.body.secondNum);     
        solutionDisplay.newSolution = newSolution;
        console.log(solutionDisplay);
        newCalculation.solution = newSolution;
    } //end multiplication else if
    else if( req.body.operator === '/' ){
        let newSolution = division( req.body.firstNum, req.body.secondNum);
        solutionDisplay.newSolution = newSolution;
        console.log(solutionDisplay);
        newCalculation.solution = newSolution;
    }//end multiplication else if
    console.log(solutionDisplay);

    //push to history array here;
    calculationHistory.push( newCalculation );
    console.log( 'object to push into current history:', newCalculation );
    console.log( 'Current history:', calculationHistory );
    res.sendStatus( 200 );
}) //end POST
console.log('outside POST calculation History', calculationHistory)
router.get( '/', (req, res)=>{
    console.log( '/calculate/ GET solution' );
    res.send( solutionDisplay );
})

router.get( '/history', (req, res)=>{
    console.log( '/calculate/ GET solution' );
    res.send( calculationHistory );
})

module.exports = router;

//calculation functions

function addition( firstNum, secondNum ){
    let solution = Number( firstNum ) + Number( secondNum );
    return solution;
}
function subtraction( firstNum, secondNum ){
    let solution = Number( firstNum ) - Number( secondNum );
    return solution;
}
function multiplication( firstNum, secondNum ){
    let solution = Number( firstNum ) * Number( secondNum );
    return solution;
}
function division( firstNum, secondNum ){
    let solution = Number( firstNum ) / Number( secondNum );
    return solution;
}
