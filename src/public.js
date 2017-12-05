$(function() {
	var $navAside = $('.aside')
	$(window).scroll(function() {
		setScrollPosi();
	})
	function setScrollPosi() {
		var scrollTop = $(document).scrollTop();
		console.log(scrollTop)
		if(scrollTop > 100) {
			$navAside.addClass('adsorb');
		} else {
			$navAside.removeClass('adsorb');
		}
	}
})