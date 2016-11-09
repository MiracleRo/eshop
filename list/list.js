(function () {
	var adress =document.getElementsByClassName('nav')[0];
	var first_icon = document.getElementById('firstpage_icon');
	adress.onmouseover = function(){
			first_icon.src='list_images/top_down.png'
	}
	adress.onmouseout =function(){
			first_icon.src='list_images/top_up.png'
	}
	//收货地址改变图片函数
	var personalcenter=document.getElementsByClassName('personalcenter')[0];
	var personal_down = document.getElementById('personal_down');
	personalcenter.onmouseover = function(){
			personal_down.src='list_images/top_down.png'
	}
	personalcenter.onmouseout =function(){
			personal_down.src='list_images/top_up.png'
	}
	//用户导航栏改变图片函数
	var allgoods = document.getElementsByClassName('all_goods')[0];
	var allicon =document.getElementById('all_icon');
	allgoods.onmouseover = function(){
			allicon.src='list_images/top_down.png'
	}
	allgoods.onmouseout =function(){
			allicon.src='list_images/top_up.png'
	}
	//所有分类导航栏改变图片函数
	var wo = document.getElementById('wo');
	var up =document.getElementById('upcl');
	var out =document.getElementById('out');
	var two = document.getElementById('two');
	var thr =document.getElementById('thr');
	var four=document.getElementById('for');
	function block(ul){
		ul.style.display='none';
	}
	block(two);
	block(thr);
	block(four);
	wo.onclick=function show(){
		if (two.style.display=='none') {
			two.style.display='block'
		}else{
			two.style.display='none';
		}
	} 
	out.onclick=function show(){
		if (thr.style.display=='none') {
			thr.style.display='block'
		}else{
			thr.style.display='none';
		}
	} ;
	up.onclick=function show(){
		if (four.style.display=='none') {
			four.style.display='block'
		}else{
			four.style.display='none';
		}
	} ;
			
})();