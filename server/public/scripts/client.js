$( document ).ready( onReady );

function onReady(){
    $( '#calculateButton' ).on( 'click', newEquation );
    $( '#clearButton' ).on( 'click', clearEquation );

}

function clearEquation(){
    console.log( "in  clearEquation" );

   $( '#numOneInput' ).val( '' );
   $( '#mathOperatorInput' ).val( '' );
   $( '#numTwoInput' ).val( '' );
}

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
    }).catch( function( err ){
        console.log( err );
        alert( 'error in calculate' );
    })
} // end newEquation
