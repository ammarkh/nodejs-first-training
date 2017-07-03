// this module for  use a important  method for this project 
module.exports = (function () {

    const mysql = require("mysql");

    function _mysqlObject(dbObj) {

        this.connection = mysql.createConnection({
            host: dbObj.host,
            user: dbObj.userName,
            password: dbObj.password,
            database: dbObj.database,
            debug: false
        });
    }


    _mysqlObject.prototype._resault = [];

    // Selected function  
    _mysqlObject.prototype.selectQuery = function (SQuery, callback) {

        this.connection.query(SQuery, function (err, resault, fields) {
            if (err) {
                return callback(err.message);
            }
            else {
                return callback(null, resault);
            }
        });

    };

    _mysqlObject.prototype.insertQuery = function (IRQuery, cb) {
        this.connection.query(IRQuery, function (err, resault) {
            if (err) throw err;
            if ( !cb ) {
                return undefined;
            } else {
                return cb(resault);
            }

        });
    };

    _mysqlObject.prototype.insertListQuery = function (ILQuery, valueArr) {
        this.connection.query(ILQuery, valueArr, function (err, resault, fields) {
            if (err) throw err;
            return resault.effectedRows + "Has Inserted";
        });
    };

    _mysqlObject.prototype.updateQuery = function (UQuery) {
        this.connection.query(UQuery, function (err, resault) {
            if (err) throw err;
            if (resault.changedRows === 1)
                return 'Record Has Updated';
            else
                throw "error in update function ";
        });
    };
    _mysqlObject.prototype.deleteQuery = function (RQuery) {
        this.connection.query(RQuery, function (err, resault) {
            if (err) throw err;
            if (resault.effectedRows === 1)
                return 'Record Has Deleted';
            else
                throw 'error in deleted function';
        });
    };
    return _mysqlObject;
})();


// mwthod for add later

// - function search();
// - function selected 1 record ()
// - function selected multi record()
// - function se;e
