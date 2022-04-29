//requires
const express = require( 'express' );
const app = express ();

//uses
app.use( express.static( './server/public' ) );
//global variables
const port = 5001;

//spin up server
app.listen( port, ()=>{
    console.log( 'oh hey' );
    console.log( 'server up on:', port );
});