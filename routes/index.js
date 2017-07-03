var express = require('express');
var sql = require('./Modules/SqlQuery');
// create the instance from object sql pass a database information

var Query = new sql({host: "localhost", userName: "root", password: "1234", database: "schooldb"});
var ListEmployee = Query.selectQuery('select * from Students', function (err, resault) {
    if (err) throw err;
    else
        return resault;
});

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    Query.selectQuery('select * from Students', function (err, resault) {
        if (err) throw err;
        else
            res.render('index',{
               List : resault
            });
    });
});


module.exports = router;
