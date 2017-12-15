$(function() {
	$('#play-audio').one('click', function(e) {
		e = e || window.event;
		e.preventDefault();
		if(!Cookies.get('mscC')) {
			$('audio')[0].play();
		} else {
			$('audio')[0].currentTime = (Cookies.get('mscC') * 1).toFixed(2);
		}
	})
	$('audio')[0].addEventListener('canplaythrough', function() {
		if(!Cookies.get('mscC')) {
			$('#play-audio').click();
		}
	})
	// 以上接着播放跳转时的音乐
	$asideLeft = $('.aside-left');
	$asideRight = $('.aside-right');
	var $navitem = $asideLeft.find('li');
	$navitem.on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
	})
	$navitem.on('hover', function() {
		$(this).addClass('active').siblings().removeClass('active');
	})
	$asideLeft.on('mouseleave', function() {
		$('.selected').addClass('active').siblings().removeClass('active');
	})
	$(window).scroll(function() {
		setScrollPosi();
	})
	function setScrollPosi() {
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 145) {
			if(!$asideLeft.hasClass('adsorb')){
				$asideLeft.addClass('adsorb');
			}
			var winWidth = $(window).width() + 17;
			if(!$asideRight.hasClass('adsorb') && winWidth > 1340) {
				$asideRight.addClass('adsorb');
			}
			if($asideRight.hasClass('adsorb') && winWidth < 1340) {
				$asideRight.removeClass('adsorb');
			}
		} else {
			$asideLeft.removeClass('adsorb');
			$asideRight.removeClass('adsorb');
			if(($(window).width() + 17) < 1340) {
				$('.aside-drawer').css('top', (145 - scrollTop) + 'px');
			}
		}
	}
	$(window).resize(function() {
		layoutAside();
	})
	// 刷新页面时布局
	function layoutAside() {
		var winWidth = $(window).width() + 17;
		var scrollTop = $(document).scrollTop();
		if(winWidth > 1340 && scrollTop > 145) {
			$asideRight.addClass('adsorb');
		}
		if(winWidth < 1340) {
			$asideRight.addClass('aside-drawer');
			if(scrollTop > 145) {
				$('.aside-drawer').css('top', '0px');
			} else {
				$('.aside-drawer').css('top', (145 - scrollTop) + 'px');
			}
		} else {
			$asideRight.removeClass('aside-drawer');
			$asideRight.css('top', '0px');
		}
	}
	layoutAside();
	$('.pag').click(function() {
		$('.aside-drawer').toggleClass('open');
	})

	$('a').click(function(e) {
		e = e || window.event;
		e.preventDefault();
		var url = $(this).attr('href');
		$('audio')[0].currentTime;
		Cookies.set('mscC', $('audio')[0].currentTime + '');
		window.location.href = url;
	})
})