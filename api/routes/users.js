var express = require('express');
var router = express.Router();

/* GET users listing. */
const users = [{phone: "1234567890", code: '763839'}];

router.get('/', function(req, res, next) {
  res.json({success: true, users});
});

// function to 
router.post('/CreateNewAccessCode/', (req, res) => {
// create a random code that has 6 digits
  const phone = req.body.data.phone;
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const check = users.filter((user) => user.phone === phone);
  console.log("Phone is" + phone);
  console.log("Check here" + check[0]);
  if (!isNaN(phone)){
    if (check.length === 0){
      users.push({phone, code});
    }
    else{
      check[0].phone = phone;
      check[0].code = code;
    }
  }
  res.json({success: true, users});
});

// Coding functions for the router
router.post('/ValidateAccessCode', (req, res) => {
  // The req.body object allows you to access data in a string or JSON object from the client side. 
  const {phone, code} = req.body.data;
  const check = users.filter((user) => user.phone === phone);
  if (!isNaN(phone) && check.length > 0 && check[0].code === code){
    // set to empty string
    check[0].code = "";
    res.json({success: true});
  }
  else{
    res.json({success: false});
  }
});

module.exports = router;
