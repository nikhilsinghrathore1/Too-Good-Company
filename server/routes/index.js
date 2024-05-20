var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello");
});

router.post("/login",(req,res, next)=>{

  res.send("done");
  console.log(req.body)
})
module.exports = router;
