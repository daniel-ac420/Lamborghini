const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	spaceBetween: 20,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		426: {
			slidesPerView: 2
		}
	}
});



/* МОБИЛЬНОЕ МЕНЮ */

  let menu = $(".header").find(".header__menu");
let burger = $(".mobile__menu-bttn");
 let close = $(".mobile__menu-close");


/* ВЫЗОВ МОБИЛЬНОГО МЕНЮ */
burger.on("click", function(){
	$(".header").toggleClass("header").toggleClass("header--active");
	close.toggle().css("display", "flex").attr("title", "Закрыть меню");
	$(this).toggle();
});


/* ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ ПРИ КЛИКЕ ПО КНОПКЕ ЗАКРЫТИЯ */
$(".mobile__menu-close").on("click", function(){
	$(".header--active").toggleClass("header").toggleClass("header--active");
	burger.toggle();
	$(this).toggle();
});


/* ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ ПРИ КЛИКЕ ПО ССЫЛКЕ ВНУТРИ МЕНЮ */
$(".navigation--mobile").find(".menu__list-item").on("click", function(){
	$(".header--active").toggleClass("header").toggleClass("header--active");
	burger.toggle();
	close.toggle();
});