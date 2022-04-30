const express = require( 'express' );
const router = express.Router();

//routes

router.post ( '/', (req,res) =>{ //I am not sure if this is correct. Should '/calculator' go here instead?
    console.log('in /calculate/   POST:', req.body); 
    //calculations function here;
    //push to history array here;
    res.sendStatus( 200 );
})

module.exports = router;