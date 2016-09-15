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

function detailSlider(){
	$('.fg-estateDetail-sliderList').each(function(){
		$(this).slick({
			dots: false,
			prevArrow: '<span class="fa fa-angle-left slick-prev"></span>',
			nextArrow: '<span class="fa fa-angle-right slick-next"></span>'
		});
	});
}

function exclusiveSlider(){
	$('.fg-exclusiveDetail-sliderList').each(function(){
		$(this).slick({
			dots: false,
			prevArrow: '<span class="fa fa-angle-left slick-prev"></span>',
			nextArrow: '<span class="fa fa-angle-right slick-next"></span>'
		});
	});
}

function exclusiveCarousel(){
	$('.fg-exclusiveDetail-carouselList').each(function(){
		$(this).slick({
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 3,
			prevArrow: '<span class="fa fa-angle-left slick-prev"></span>',
			nextArrow: '<span class="fa fa-angle-right slick-next"></span>',
			responsive: [
				{
					breakpoint: 680,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
}

function studycasesCarousel(){
	$('.fg-studyCases-carouselList').each(function(){
		$(this).slick({
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 3,
			prevArrow: '<span class="fa fa-angle-left slick-prev"></span>',
			nextArrow: '<span class="fa fa-angle-right slick-next"></span>',
			responsive: [
				{
					breakpoint: 680,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
}

function projectsToInvestCarousel(){
	$('.fg-projectsToInvest-carouselList').each(function(){
		$(this).slick({
			dots: false,
			slidesToShow: 2,
			slidesToScroll: 2,
			prevArrow: '<span class="fa fa-angle-left slick-prev"></span>',
			nextArrow: '<span class="fa fa-angle-right slick-next"></span>',
			responsive: [
				{
					breakpoint: 680,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
}

function landInvestorsCharts(){
	var investorsTopCtx = $('#fg-landInvestors-topChart'),
		investorsTopChart = new Chart(investorsTopCtx, {
			type: 'line',
			data: {
				labels: ['2012','2013','2014','2015','2016'],
				datasets: [
					{
						data: [20,10,17,100,0],
						label: 'Bener',
						backgroundColor: 'rgba(112,1,209,0.4)',
						borderColor: 'rgba(0,0,0,0)',
						borderWidth: 0,
						fill: true,
						lineTension: 0,
						pointRadius: 0
					},
					{
						data: [15,30,80,60,20],
						label: 'Care',
						backgroundColor: 'rgba(4,168,222,0.4)',
						borderColor: 'rgba(0,0,0,0)',
						borderWidth: 0,
						fill: true,
						lineTension: 0,
						pointRadius: 0
					},
					{
						data: [0,75,30,55,7],
						label: 'Gold',
						backgroundColor: 'rgba(250,205,130,0.4)',
						borderColor: 'rgba(0,0,0,0)',
						borderWidth: 0,
						fill: true,
						lineTension: 0,
						pointRadius: 0
					}
				]
			},
			options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
						gridLines: {
							display: false
						}
					}],
					yAxes: [{
						display: false
					}]
				}
			}
		});
	$('#fg-landInvestors-topChart').parent().append(investorsTopChart.generateLegend());

	var investorsBepartCtx = $('#fg-landInvestors-bepartChart'),
		investorsBepartChart = new Chart(investorsBepartCtx, {
			type: 'horizontalBar',
			data: {
				labels: ['Ubicación','Seguridad','Instalaciones'],
				datasets: [
					{
						data: [65,87,43],
						backgroundColor: [
							'rgba(250,205,130,0.4)',
							'rgba(112,1,209,0.4)',
							'rgba(4,168,222,0.4)'
						]
					}
				]
			},
			options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
						display: false,
						ticks: {
							min: 0,
							max: 100
						}
					}],
					yAxes: [{
						gridLines: {
							display: false
						}
					}]
				}
			}
		});

	var investorsHomeAcqCtx = $('#fg-landInvestors-homeAcqChart'),
		investorsHomeAcqChart = new Chart(investorsHomeAcqCtx, {
			type: 'bar',
			data: {
				labels: ['Nueva','Usada','Hipoteca','Otros'],
				datasets: [
					{
						data: [50,30,40,80],
						backgroundColor: [
							'rgba(250,5,30,0.4)',
							'rgba(250,205,130,0.4)',
							'rgba(112,1,209,0.4)',
							'rgba(4,168,222,0.4)'
						]
					}
				]
			},
			options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
						gridLines: {
							display: false
						}
					}],
					yAxes: [{
						display: false,
						ticks: {
							min: 0,
							max: 100
						}
					}]
				}
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

  // Selector, MinValue, MaxValue, MinDefault, MaxDefault, slideJump
  serviceLandOpsSlider('.serviceLandOps-areaSlider', 0, 600, 0, 300, 50);
  serviceLandOpsSlider('.serviceLandOps-priceSlider', 0, 4000000000, 0, 2000000000, 100000000);

  initNumberBox();

  detailSlider();
  exclusiveSlider();
  exclusiveCarousel();

  landInvestorsCharts();
  studycasesCarousel();
  projectsToInvestCarousel();

});