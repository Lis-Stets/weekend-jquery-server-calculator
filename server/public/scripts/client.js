$( document ).ready( onReady );

function onReady(){
    $( '#calculateButton' ).on( 'click', newEquation );
    $( '#clearButton' ).on( 'click', clearEquation );

} //end onReady

function clearEquation(){
    console.log( "in  clearEquation" );

   $( '#numOneInput' ).val( '' );
   $( '#mathOperatorInput' ).val( '' );
   $( '#numTwoInput' ).val( '' );
} //end clearEquation

function newEquation(){
    console.log( "in  newEquation" );
    let equationInputs = {
        firstNum: $( '#firstNumInput' ).val(),
        operator: $( '#mathOperatorInput' ).val(),
        secondNum: $( '#secondNumInput' ).val(),
    }
    console.log( equationInputs, equationInputs.firstNum, equationInputs.operator, equationInputs.secondNum );
    //send object to server via AJAX
    $.ajax({
        method: 'POST', 
        url: '/calculate',
        data: equationInputs
    }).then( function( response ){
        console.log( 'back from POST:', response );
        //run GET function to update the DOM
        displaySolutionGET();
        console.log( 'back from GET:', response)
        displayEquationHistoryGET();
    }).catch( function( err ){
        console.log( err );
        alert( 'error in calculate' );
    })
} //end newEquation

function displaySolutionGET(){
    //get solution from server
    $.ajax({
        method:'GET',
        url: '/calculate'
    }).then( function( response ){
        console.log(response);
        const el = $( '#solutionOutputDiv' );
        el.empty();
        el.append( `<h2 id="solutionOutput">Solution: ${ response.newSolution }</h2>` );
    }).catch( function( err ){
        console.log( err );
        alert( 'error retrieving solution' );
    })
}   

function displayEquationHistoryGET(){
    $.ajax({
        method: 'GET',
        url: '/calculate/history'
    }).then( function( response ){
        console.log( 'back from History GET', response);
        const el = $( '#calculationHistoryOutput' );
        el.empty();
        for( let i=0; i< response.length; i++ ){
            el.append( `<li>${response[i].firstNum} ${response[i].operator} ${response[i].secondNum} = ${response[i].solution}</li>`)
        }//end for
    }).catch( function( err ){
        console.log( err );
        alert( 'error retrieving history' );
    })
}