const router = require('express').Router();

router.get('/',(req,res,next)=>{
    // res.send('Holiii');   
    res.render('index.html');
    next();
    
});
module.exports = router;