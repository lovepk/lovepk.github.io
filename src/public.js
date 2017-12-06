$(function() {
	var $navAside = $('.aside')
	var $navitem = $('.aside-left li');
	$navitem.on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
	})
	$navitem.on('hover', function() {
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.aside-left').on('mouseleave', function() {
		$('.selected').addClass('active').siblings().removeClass('active');
	})
	$(window).scroll(function() {
		setScrollPosi();
	})
	function setScrollPosi() {
		var scrollTop = $(document).scrollTop();
		console.log(scrollTop)
		if(scrollTop > 145) {
			$navAside.addClass('adsorb');
		} else {
			$navAside.removeClass('adsorb');
		}
	}
})