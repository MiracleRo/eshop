(function () {
	var adress =document.getElementsByClassName('nav')[0];
	var first_icon = document.getElementById('firstpage_icon');
	adress.onmouseover = function(){
			first_icon.src='act_images/top_down.png'
	}
	adress.onmouseout =function(){
			first_icon.src='act_images/top_up.png'
	}
	//收货地址改变图片函数
	var personalcenter=document.getElementsByClassName('personalcenter')[0];
	var personal_down = document.getElementById('personal_down');
	personalcenter.onmouseover = function(){
			personal_down.src='act_images/top_down.png'
	}
	personalcenter.onmouseout =function(){
			personal_down.src='act_images/top_up.png'
	}
	//用户导航栏改变图片函数
	var allgoods = document.getElementsByClassName('all_goods')[0];
	var allicon =document.getElementById('all_icon');
	allgoods.onmouseover = function(){
			allicon.src='act_images/top_down.png'
	}
	allgoods.onmouseout =function(){
			allicon.src='act_images/top_up.png'
	}
	//所有分类导航栏改变图片函数
	// function banner(){
	// 	var c=document.getElementById("banner_canvas");
	// var ctx=c.getContext("2d");
	// ctx.font="Microsoft YaHei 95px";
	// // ctx.fillStyle ='#ffffff';
	// // ctx.strokeText("2016/11/11",10,50);
	// ctx.fillStyle = "white";
 //    ctx.fillText("2016/11/11",10,50);
	// ctx.strokeStyle = "black";
 //    ctx.strokeText("2016/11/11",10,50); 
	// }
	// banner();
	var banner = ['act_images/banner1.jpg','act_images/banner2.jpg','act_images/banner3.jpg','act_images/banner4.jpg']
	var banners = document.getElementById('banners');
	setInterval(function(){
		var src = banners.getAttribute('src');
		if (src==banner[0]) {
			banners.setAttribute('src',banner[1]);
		}else if (src==banner[1]) {
			banners.setAttribute('src',banner[2]);
		}else if (src==banner[2]) {
			banners.setAttribute('src',banner[3]);
		}else if (src==banner[3]) {
			banners.setAttribute('src',banner[0]);
		}
	},3000)

})();