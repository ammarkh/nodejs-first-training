var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('NewDepartment', {
        title: 'New Department'
    });
});

router.post('/', function (req, res) {
        /* insert department name -- desc(if not null) to db*/
    _db.insertQuery('insert into department(Dep_Name,Dep_Desc)values("' + req.body.DepName + '","' + ((req.body.Dep_Dsc == null) ? null : req.body.Dep_Dsc) + '")');
    return res.redirect('/');
});

module.exports = router;