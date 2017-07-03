var express = require('express');

var router = express.Router();

var url = require('url');


/* GET users listing. */
router.get('/', function (req, res, next) {

    _db.selectQuery('select s.*,mgr.id,mgr.name M,department.* from Students s ,students mgr,department where s.mgr = mgr.id and   department.id = s.Dep_ID and  s.id= ' + req.query.id, function (err, resault) {
      if(resault==0){
          _db.selectQuery('select * from students s, department where s.Dep_ID = department.ID  and s.id = ' + req.query.id,function (err, resault) {
            res.render('EmployeeDetails',{Employee:resault});
          });
      } else {
          res.render('EmployeeDetails',{Employee:resault});
      }

    });


});

module.exports = router;