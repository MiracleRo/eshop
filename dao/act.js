/**
 * Created by miracle on 16-11-15.
 */
var cars= {
    clear:'delete from cars where uname =?',
    delete:'delete from cars where id =?',
    queryAll:'select * from cars',
    insert:'insert into cars (src ,name ,color ,size ,num ,cost,uname) values (?,?,?,?,?,?,?)',
};
module.exports =cars;