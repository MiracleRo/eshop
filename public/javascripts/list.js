/**
 * Created by miracle on 16-11-14.
 */
var url = "http://127.0.0.1:3000/list";
window.onload=function () {
    var imgs = document.getElementsByClassName('imgs')[0];
    var p=imgs.getElementsByTagName('p');
    var span=imgs.getElementsByTagName('span');
    var pics =imgs.getElementsByTagName('img');
    console.log(p);
    console.log(span);
    console.log(pics);
    $.post(url,{},function (data, status) {
        for(var i=0;i<data.length;i++){
            var name=document.createTextNode(data[i].GoodName);
            var price=document.createTextNode('¥'+data[i].price);
            span[i].appendChild(name);
            p[i].appendChild(price);
            pics[i].setAttribute('src',data[i].src);
        }
    })
}