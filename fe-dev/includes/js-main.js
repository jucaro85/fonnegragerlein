function EstatesSlider(){
	$('.fg-estateItem-gallery').each(function(){
		if($('li', this).length > 1){
			$(this).slick({
				infinite: false,
				prevArrow: '<span class="fa fa-angle-left slick-prev"></span>',
				nextArrow: '<span class="fa fa-angle-right slick-next"></span>'
			});
		}
	});
}

function formatNumber(n){ return n.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1.'); }

function dwellingOpsSlider(sclass, minv, maxv, startd, endd, stepd) {
	$(sclass).each(function(){
		var $slider = $('.dwellingops-slider', this);
		$slider.slider({
			range: true,
			min: minv,
			max: maxv,
			values: [startd,endd],
			step: stepd,
			slide: function(e,ui) {
				$(sclass).find('.dwellingops-sliderMin').text( formatNumber(ui.values[0]) );
				$(sclass).find('.dwellingops-sliderMax').text( formatNumber(ui.values[1]) );
			}
		});
		$(sclass).find('.dwellingops-sliderMin').text( formatNumber($slider.slider('values', 0)) );
		$(sclass).find('.dwellingops-sliderMax').text( formatNumber($slider.slider('values', 1)) );
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

  // Selector, MinValue, MaxValue, MinDefault, MaxDefault, slideJump
  dwellingOpsSlider('.dwellingops-areaSlider', 0, 600, 0, 300, 50);
  dwellingOpsSlider('.dwellingops-priceSlider', 0, 4000000000, 0, 2000000000, 100000000);

});