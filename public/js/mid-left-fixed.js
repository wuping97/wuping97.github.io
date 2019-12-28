console.dir($(document).height())

$(window).scroll(function(){
	// var distance = $(window).scrollTop();
	// console.dir(distance);
	
	if (($(window).scrollTop()>400) && ($(window).scrollTop()<1500)) {
		$('.mid-left').css({'position':'absolute','top': $(window).scrollTop() + 50 + 'px'});
		// console.log('div高', $('.mid-left').css('top'));
	}
});

