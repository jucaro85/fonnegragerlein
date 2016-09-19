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
	if($('#fg-landInvestors-topChart').length){
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
	}

	if($('#fg-landInvestors-bepartChart').length){
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
	}

	if($('#fg-landInvestors-homeAcqChart').length){
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
}

function investorsDetailChart(){
	if($('#fg-investorPDetail-mainChart').length){
		var investorsDetailCtx = $('#fg-investorPDetail-mainChart'),
		investorsDetailChart = new Chart(investorsDetailCtx, {
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
		$('#fg-investorPDetail-mainChart').parent().append(investorsDetailChart.generateLegend());
	}
}

function appraisalCharts(){
	if($('#fg-appraisal-study-barchart1').length){
		var investorsDetailCtx = $('#fg-appraisal-study-barchart1'),
		investorsDetailChart = new Chart(investorsDetailCtx, {
			type: 'bar',
			data: {
				labels: ['Casa','Apto','Otros'],
				datasets: [
					{
						data: [50,80,40],
						backgroundColor: [
							'rgba(250,5,30,0.4)',
							'rgba(250,205,130,0.4)',
							'rgba(112,1,209,0.4)'
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
						gridLines: {
							display: false
						},
						ticks: {
							min: 0,
							max: 100,
							stepSize: 25
						}
					}]
				}
			}
		});
	}

	if($('#fg-appraisal-study-linechart1').length){
		var investorsDetailCtx = $('#fg-appraisal-study-linechart1'),
		investorsDetailChart = new Chart(investorsDetailCtx, {
			type: 'line',
			data: {
				labels: ['ENE','FEB','MAR','ABR','MAY'],
				datasets: [
					{
						data: [2,1,1.7,10,0],
						label: 'Bener',
						borderColor: 'rgba(112,1,209,0.8)',
						borderWidth: 1,
						fill: false,
						lineTension: 0,
						pointRadius: 0
					},
					{
						data: [1.5,3,8,6,2],
						label: 'Care',
						borderColor: 'rgba(4,168,222,0.8)',
						borderWidth: 1,
						fill: false,
						lineTension: 0,
						pointRadius: 0
					},
					{
						data: [0,7.5,3,5.5,0.5],
						label: 'Gold',
						borderColor: 'rgba(250,205,130,0.8)',
						borderWidth: 1,
						fill: false,
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
						gridLines: {
							display: false
						},
						ticks: {
							min: 0,
							max: 10,
							stepSize: 2.5
						}
					}],
					ticks: {
						beginAtZero: false
					}
				}
			}
		});
	}
}

function blogLanSlider(){
	$('.blog-sliderList').each(function(){
		$(this).slick({
			adaptiveHeight: true,
			dots: false,
			prevArrow: '<span class="fa fa-angle-left slick-prev"></span>',
			nextArrow: '<span class="fa fa-angle-right slick-next"></span>'
		});
	});
}

function formDatepickers(){
	if($('.datepicker').length){
		$('.datepicker').datepicker({ changeMonth: true, changeYear: true, yearRange: '-50:+0', maxDate: '0' });
	}
}

function partnersCarousel(){
	$('.fg-partnersList').each(function(){
		$(this).slick({
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 5,
			prevArrow: '<span class="fa fa-angle-left slick-prev"></span>',
			nextArrow: '<span class="fa fa-angle-right slick-next"></span>',
			responsive: [
				{
					breakpoint: 960,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 680,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}
			]
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

  detailSlider();
  exclusiveSlider();
  exclusiveCarousel();

  landInvestorsCharts();
  studycasesCarousel();
  projectsToInvestCarousel();

  investorsDetailChart();

  appraisalCharts();

  formDatepickers();
  blogLanSlider();

  partnersCarousel();

  /* Header */
  $('#fg-rspvBtn a').click(function(){
  	$(this).toggleClass('active');
  	if($(this).hasClass('active')){
  		$('#fg-mainMenu').slideDown(500);
  	}else{
  		$('#fg-mainMenu').slideUp(500);
  	}
  });


	$('#fg-toggle-loginBox').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$($.attr(this, 'href')).stop().slideToggle('fast');
	});

});