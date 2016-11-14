/**
 * Created by miracle on 16-11-10.
 */
var mysql = require('mysql');
var conf = require('../config/db');
var sql = require('./usersql');
var good_sql =require('./goods')
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
module.exports = {
    reg: function (name, pass, callback) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.queryById, [name], function (error, rows, flied) {
            if (!rows.length) {
                //当前用户不存在
                connection.query(sql.insert, [name, pass], function () {
                    callback(true);
                });
            } else {
                //当前用户已经存在
                callback(false);
            }
        });
    },
    log:function (name, pass, callback) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(sql.log,[name,pass], function (error, rows, flied) {
            if (rows.length) {
                //当前用户不存在
                callback(true);
            } else {
                //当前用户已经存在
                callback(false);
            }
        });
    },
   list_load: function (req,res,next) {
        var connection = mysql.createConnection(conf.mysql);
        connection.connect();
        connection.query(good_sql.queryAll,function (error, rows, flied) {
            res.send(rows);
        });
    },
}
