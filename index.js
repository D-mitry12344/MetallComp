let headerAll = document.querySelector('.Head');
let menuCatalog = document.querySelectorAll("#menu_catalog");
let menuCatalogItems = document.querySelectorAll("#menu_catalog_items");
let menuLists = document.querySelectorAll('.Head__listHead__menu-items');

menuCatalog[0].addEventListener("click", function(){
	if(menuCatalogItems[0].style.display === ''){
		menuCatalogItems[0].style.display = 'block';
	}else{
		menuCatalogItems[0].style.display = '';
	}
})

menuCatalog[1].addEventListener("click", function(){
	if(menuCatalogItems[1].style.display === ''){
		menuCatalogItems[1].style.display = 'block';
	}else{
		menuCatalogItems[1].style.display = '';
	}
})

menuLists.forEach(function(list){
	if(list !== menuLists[0] && list !== menuLists[1]){
		list.addEventListener("click", function(){
			menuCatalogItems[0].style.display='';
			menuCatalogItems[1].style.display='';
		})
	}
	list.addEventListener("click", function(){
		if(list === menuLists[0]){
			menuCatalogItems[1].style.display = '';
		}
		if(list === menuLists[1]){
			menuCatalogItems[0].style.display = '';
		}else{

		}
	})
})

let regionMenu = document.querySelector("#region_menu");
let regions = document.querySelector("#regions");

regionMenu.addEventListener("click", function(){
	if(regions.style.display === ''){
		regions.style.display = 'block';
	}else{
		
		regions.style.display = '';
	}

})
let regionsMyself = document.querySelectorAll("#region_myself");
regionsMyself.forEach(function(item){
	item.addEventListener("click", function(){
		
		regionMenu.textContent =item.textContent ;	
	})
})

let language = document.querySelector("#language");
let masLang = document.querySelectorAll(".Head__menuHead__menu_language-item");
language.addEventListener("click",function(){
	masLang.forEach(function(item){
		if(item.classList[2] !== 'Head__menuHead__menu_language-disabled'){
			item.classList.add("Head__menuHead__menu_language-disabled")
		}else{
			item.classList.remove("Head__menuHead__menu_language-disabled")
		}
	})
})


let bannerHead = document.querySelector(".Head__banner_head");
let sliderItem = document.querySelectorAll(".Head__slider_item_head");
let catalog = document.querySelector('.popularBlock')
/*
sliderItem[1].addEventListener('click',function() {
	catalog.classList.add('Head__active_banner');
	bannerHead.classList.remove('Head__active_banner');
	sliderItem[1].classList.add("Head__active_slider_item");
	sliderItem[0].classList.remove("Head__active_slider_item");
	sliderItem.forEach(function(item){
		item.style.borderBottom="2px solid black";
		item.style.color="black";
	})
})

sliderItem[0].addEventListener('click',function() {
	bannerHead.classList.add('Head__active_banner');
	catalog.classList.remove('Head__active_banner');
	sliderItem[0].classList.add("Head__active_slider_item");
	sliderItem[1].classList.remove("Head__active_slider_item");
	sliderItem.forEach(function(item){
		item.style.borderBottom="";
		item.style.color="";
	})
})
*/
let Block = document.querySelector('html');


if (Block.addEventListener) {
       Block.addEventListener("mousewheel", onWheel);
    } else { 
      Block.attachEvent("onmousewheel", onWheel);
}

let number=0;
function onWheel(e) {
    var delta = e.deltaY;
    number = number + delta 
    if(number > 500){
	    catalog.classList.add('Head__active_banner');
	    bannerHead.style.animation="0.3s move_banner_dis forwards"
	    //setTimeout(()=>{
			bannerHead.classList.remove('Head__active_banner');
	    //}, 500)
		sliderItem[1].classList.add("Head__active_slider_item");
		sliderItem[0].classList.remove("Head__active_slider_item");
		sliderItem.forEach(function(item){
			item.style.borderBottom="2px solid black";
			item.style.color="black";
		})
		catalog.style.animation="1s move_banner_act forwards"
    }
    if(number <= 500 || number <= 0){
	    bannerHead.classList.add('Head__active_banner');
	    catalog.style.animation="0.3s move_banner_dis forwards";
	    //setTimeout(()=>{
			catalog.classList.remove('Head__active_banner');
	    //}, 500)
		sliderItem[0].classList.add("Head__active_slider_item");
		sliderItem[1].classList.remove("Head__active_slider_item");
		sliderItem.forEach(function(item){
			item.style.borderBottom="";
			item.style.color="";
		})
		bannerHead.style.animation="1s move_banner_act forwards";
    }
    
    return number;		
}

/*

let sliderItem = document.querySelectorAll(".Head__slider_item_head");
const massivItem= [0,1,2,3,4]
let timeBanner =0;

setInterval(function(){		

	let e = timeBanner+1;
	sliderItem[timeBanner].classList.remove('Head__active_slider_item');
	bannersHead[timeBanner].style.animation ="0.3s move_banner_dis forwards linear";
	bannersHead[timeBanner].classList.remove('Head__active_banner');
	if(e === 5){
		timeBanner = -1;
		sliderItem[0].classList.add('Head__active_slider_item');
		bannersHead[0].classList.add('Head__active_banner');
		bannersHead[0].style.animation ="0.3s move_banner_act forwards linear";
		return timeBanner++;	
	}
	sliderItem[e].classList.add('Head__active_slider_item');	
	bannersHead[e].classList.add('Head__active_banner');
	bannersHead[e].style.animation ="0.3s move_banner_act forwards linear";	
	return timeBanner++;
}, 5000)
		

*/
