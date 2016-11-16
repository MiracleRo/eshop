/**
 * Created by miracle on 16-11-15.
 */
var cars= {
    queryAll:'select * from cars',
    insert:'insert into cars (src ,name ,color ,size ,num ,cost,uname) values (?,?,?,?,?,?,?)',
};
module.exports =cars;