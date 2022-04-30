//requires
const express = require( 'express' );
const app = express ();
const bodyParser = require( 'body-parser' );
const calculate = require( './modules/calculate' );


//uses
app.use( express.static( './server/public' ) );
app.use( bodyParser.urlencoded( {extended:true} ) );
app.use( '/calculate', calculate ); //I am not sure if this is correct. Should '/' go here instead?
//global variables
const port = 5001;

//spin up server
app.listen( port, ()=>{
    console.log( 'oh hey' );
    console.log( 'server up on:', port );
});

