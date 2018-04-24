
  var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ilab.engr.utk.edu",
  user: "jthom162",
  password: "jthom162@421"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //res.send('MySQL::Connected!');
  });

router.get('/enduser', function(req, res, next) {
  con.query("SELECT * FROM jthom162.enduser", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* Post student data. */
router.post('/enduser', function(req, res, next) {
  var sql = con.query("INSERT INTO jthom162.enduser set ? ", req.body, function (err, result, fields) {
    if (err) throw err;
    
    console.log(sql);
    res.send(result);
  });
});
module.exports = router;
