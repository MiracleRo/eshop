(function () {
	var adress =document.getElementsByClassName('nav')[0];
	var first_icon = document.getElementById('firstpage_icon');
	adress.onmouseover = function(){
			first_icon.src='firstpage_images/top_down.png'
	}
	adress.onmouseout =function(){
			first_icon.src='firstpage_images/top_up.png'
	}
	//收货地址改变图片函数
	var personalcenter=document.getElementsByClassName('personalcenter')[0];
	var personal_down = document.getElementById('personal_down');
	personalcenter.onmouseover = function(){
			personal_down.src='firstpage_images/top_down.png'
	}
	personalcenter.onmouseout =function(){
			personal_down.src='firstpage_images/top_up.png'
	}
	//用户导航栏改变图片函数
	var allgoods = document.getElementsByClassName('all_goods')[0];
	var allicon =document.getElementById('all_icon');
	allgoods.onmouseover = function(){
			allicon.src='firstpage_images/top_down.png'
	}
	allgoods.onmouseout =function(){
			allicon.src='firstpage_images/top_up.png'
	}
	var banner = ['firstpage_images/banner1.jpg','firstpage_images/banner2.jpg','firstpage_images/banner3.jpg','firstpage_images/banner4.jpg']
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