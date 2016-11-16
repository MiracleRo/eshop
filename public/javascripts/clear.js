/**
 * Created by miracle on 16-11-16.
 */
(function () {
    var clear=document.getElementById('clear');
    var a = 'http://127.0.0.1:3000/clear';
    clear.onclick=function () {
        $.post(a,{
            name:sessionStorage.getItem(name),
        },function (data,status) {

        })
    }
})()