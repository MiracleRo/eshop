/**
 * Created by miracle on 16-11-15.
 */
(function () {
    var url = "http://127.0.0.1:3000/car"
    var del =document.getElementsByClassName('del');
    function aaa() {
        $.post(url,{},function (data, status) {
            var shop_car =document.getElementsByClassName('shop_car')[0];
            var shop_buy = document.getElementsByClassName('shop_buy')[0];
            for(var i =0;i<data.length;i++){
                var shop_goods = document.createElement('div');
                shop_goods.setAttribute('class','shop_goods');
                shop_car.insertBefore(shop_goods,shop_buy);
                shop_goods.innerHTML='<a href="#5d"><img src='+data[i].src+'></a><span class="dis">'+data[i].name+'</span> <span class="color">'+data[i].color+'</span> <span class="size">'+data[i].size+'</span> <div class="num"> <span>'+data[i].num+'</span> </div> <a href="#65"> <div class="add"> <span>+</span></div> </a> <a href="#656"> <div class="sub"><span>-</span></div> </a> <span class="cost">¥'+data[i].cost+'</span>'+'<button class="del"><span>x</span></button>';
                (function (i) {
                    del[i].onclick=function () {
                        $.post("http://127.0.0.1:3000/shop_del",{
                            id:data[i].id
                        },function (data,status) {
                            location.reload();
                        })
                    }
                })(i);
            }

        })

    }
    aaa();

})();
