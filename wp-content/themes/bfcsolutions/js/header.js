// JavaScript Document

jQuery(document).ready(function($) { 	
	
	// console.log('header.js loaded successfully!');
	
	if ($(document).scrollTop() > 20) {
		$('header').addClass('scrolled');
	}
	
    $(window).scroll(function() {
        if ($(document).scrollTop() > 20) {
            $('header').addClass('scrolled');
        }
        else {
            $('header').removeClass('scrolled');
        }
    });
	
    $('header .hamburger .hamburger-container').on('click', function(event) {
        if (!$('.main-menu').hasClass('locked')) {
            if ($('.main-menu').hasClass('open')) {
                closeMenu();
            } else {
                $('.main-menu').addClass('locked');
                // $('header .hamburger img').attr("src", imageSrc);
				$('header').addClass('scrolled');
				$('header').addClass('menu-open');
                $('.main-menu').slideDown(250, function() {
                    $('.main-menu').removeClass('locked');
                    $('.main-menu').addClass('open');
                    $('body').addClass('no-scroll');
                });
            }
        }
	});
	
	// submenu rollover (desktop)
	$('.main-menu > ul > li').on('mouseenter', function(event) {
		// console.log('rolled over this:');
		// console.log($(this));
		if (!$('header .main-menu').hasClass('locked') && $(this).css('display') != 'block' && $(this).find('ul.submenu').length !== 0) {
			$('header .main-menu').addClass('locked');
			// console.log('added lock to .main-menu');
			$('header .main-menu li.has-submenu.open').find('ul.submenu').slideUp(200)
			if ($(this).find('ul.submenu').length !== 0 && $(this).css('display') != 'block') {
				$(this).addClass('open');
				$(this).children('ul.submenu').slideDown(200, function(event) {
					$('header .main-menu').removeClass('locked');
				});
			}
		}
	});
	
	$('.main-menu > ul > li').on('mouseleave', function(event) {
		if (!$('header .main-menu').hasClass('locked')) {
			if ($(this).find('ul.submenu').length !== 0 && $(this).css('display') != 'block') {
				$(this).removeClass('open');
				$(this).children('ul.submenu').slideUp(200, function(event) {
					$('header .main-menu').removeClass('locked');
					// console.log('removed lock on .main-menu');
				});
			}
		}
	});
	
	// submenu click (mobile)
	$('.main-menu li.has-submenu span').click(function(event) {
		if ($(this).parent().css('display') == 'block') {
			if (!$(this).parent().hasClass('open')) {
				console.log('menu item is not open!');
				event.preventDefault();
				$('.main-menu li.open ul.submenu').slideUp(300);
				$('.main-menu li.open').removeClass('open');
				$(this).parent().addClass('open');
				$(this).parent().children('ul.submenu').slideDown(300);
			} else {
				$(this).parent().removeClass('open');
				$(this).parent().children('ul.submenu').slideUp(300);
			}
		}
	});
	
	window.closeMenu = function() {
		$('.main-menu').addClass('locked');
		$('.main-menu').slideUp(250, function() {
			// $('header .hamburger img').attr("src", imageSrc);
			$('.main-menu').removeClass('locked');
			$('.main-menu').removeClass('open');
			$('.main-menu li.open ul.submenu').slideUp(300);
			$('.main-menu li.open').removeClass('open');
			$('body').removeClass('no-scroll');
			$('header').removeClass('menu-open');
			if ($(document).scrollTop() < 20) {
				$('header').removeClass('scrolled');
			}
		});
	}
	
    $(document).on("click", function(event){
        var $trigger = $('.main-menu > ul > li');
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
			$('header .main-menu ul.submenu').slideUp(200, function(event) {
				$('header .main-menu').removeClass('locked');
				$(this).parent().removeClass('open');
			});
        }            
    });
    
/*    $('header .hamburger img').on('click', function(event) {
        if (!$('header .main-menu').hasClass('locked')) {
            imageSrc = $('header .hamburger img').attr("src");
            if ($('header .main-menu').hasClass('open')) {
                $('header .main-menu').addClass('locked');
                $('header .main-menu').slideUp(250, function() {
                    imageSrc = imageSrc.replace("menu_close.png", "menu.png");
                    $('header .hamburger img').attr("src", imageSrc);
                    $('header .main-menu').removeClass('locked');
                    $('header .main-menu').removeClass('open');
                    $('body').removeClass('no-scroll');
                });
            } else {
                $('header .main-menu').addClass('locked');
                imageSrc = imageSrc.replace("menu.png", "menu_close.png");
                $('header .hamburger img').attr("src", imageSrc);
                $('header .main-menu').slideDown(250, function() {
                    $('header .main-menu').removeClass('locked');
                    $('header .main-menu').addClass('open');
                    $('body').addClass('no-scroll');
                });
            }
        }
	});*/
	
});