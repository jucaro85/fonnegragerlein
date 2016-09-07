function EstatesSlider(){
	$('.fg-estateItem-gallery').each(function(){
		console.log($('li', this).length);
		if($('li', this).length > 1){
			$(this).slick({
				infinite: false,
				prevArrow: '<span class="fa fa-angle-left slick-prev"></span>',
				nextArrow: '<span class="fa fa-angle-right slick-next"></span>'
			});
		}
	});
}

$(document).ready(function(){

  $("#fg-slickHome").slick({
  	autoplay:true,
  	fade: true,
  	arrows:false,
  	speed: 1400,
  	autoplaySpeed: 7500,
  	pauseOnHover:false
  });

  EstatesSlider();

});