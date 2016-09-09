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

function serviceLandOpsSlider(sclass, minv, maxv, startd, endd, stepd) {
	$(sclass).each(function(){
		var $slider = $('.serviceLandOps-slider', this);
		$slider.slider({
			range: true,
			min: minv,
			max: maxv,
			values: [startd,endd],
			step: stepd,
			slide: function(e,ui) {
				$(sclass).find('.serviceLandOps-sliderMin').text( formatNumber(ui.values[0]) );
				$(sclass).find('.serviceLandOps-sliderMax').text( formatNumber(ui.values[1]) );
			}
		});
		$(sclass).find('.serviceLandOps-sliderMin').text( formatNumber($slider.slider('values', 0)) );
		$(sclass).find('.serviceLandOps-sliderMax').text( formatNumber($slider.slider('values', 1)) );
	});
}

function initNumberBox(){
	$('.serviceLandOps-numberbox').each(function(){
		var $numberbox = $(this), val = Number($('input', $numberbox).val());
		$('.fa-plus', $numberbox).click(function(){
			val++;
			$('input', $numberbox).val(val);
		});
		$('.fa-minus', $numberbox).click(function(){
			if(val > 0){ val--; }
			$('input', $numberbox).val(val);
		});
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
  serviceLandOpsSlider('.serviceLandOps-areaSlider', 0, 600, 0, 300, 50);
  serviceLandOpsSlider('.serviceLandOps-priceSlider', 0, 4000000000, 0, 2000000000, 100000000);

  initNumberBox();

});