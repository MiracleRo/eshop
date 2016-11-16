
/**
 * Created by miracle on 16-11-16.
 */
(function () {
    var num=document.getElementById('num');
    var ul='http://127.0.0.1:3000/pro'
    var add_shop=document.getElementById('shop_car')
    add_shop.onclick=function () {
        $.post(ul,{
            num:num.value,
            user:sessionStorage.getItem('user'),
        },function (data,status) {
           console.log(data[0]);
        })
    }
})()