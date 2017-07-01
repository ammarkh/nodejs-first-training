var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    _db.selectQuery('select * from Department', function (err, resault) {
        _db.selectQuery('select id,Name from students where mgr is not null', function (err, data) {
            res.render('NewEmployee', {
                dep: resault,
                manager: data
            });

        });
    });
});



router.post('/', function (req, res) {
    /* in this Code Call a Property Has Fill Data in Form  selected-control(manger_value/Dep_Value) and Text-control(Age / user ) */

    _db.insertQuery('insert into Students (Name, Age, Dep_ID, Mgr) values("'+req.body.user+'", '+req.body.Age+', '+ req.body.Dep_value+','+((req.body.manger_value == 0) ?null:req.body.manger_value )+')', function (resault) {
            console.log(resault.affectedRows + ' Row Has Added');
    })
    return res.redirect('/');

});

module.exports = router;