require.config({
	baseUrl:'./js',
	paths:{
		'jquery':'lib/jquery/jquery.min',
	}
});
require(['jquery','app/carousel'],function($,Carousel){
	console.log(Carousel);
	Carousel.init($(".carousel"));
});