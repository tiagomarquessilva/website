/*
$(window).on('load', function () {
	(setTimeout(function () {
		$('.preloader').addClass('loaded');
	}, 1e3),
	$('.portfolio-items').length) &&
		($('.portfolio-items').isotope(),
		$('.project-filter ul li').on('click', function () {
			$('.portfolio-filter ul li').removeClass('sel-item'),
				$(this).addClass('sel-item');
			var t = $(this).attr('data-filter');
			$('.portfolio-items').isotope({
				filter: t,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: !1,
				},
			});
		}));
		
}),
*/
$(window).on('load', function () {
	setTimeout(function () {
		$('.preloader').addClass('loaded');
	}, 1e3);
	$('.experience-items').length &&
		($('.experience-items').isotope(),
		$('.experience-filter ul li').on('click', function () {
			$('.experience-filter ul li').removeClass('sel-item'),
				$(this).addClass('sel-item');
			var t = $(this).attr('data-filter');
			$('.experience-items').isotope({
				filter: t,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: !1,
				},
			});
		}));
	$('.projects-items').length &&
		($('.projects-items').isotope(),
		$('.projects-filter ul li').on('click', function () {
			$('.projects-filter ul li').removeClass('sel-item'),
				$(this).addClass('sel-item');
			var t = $(this).attr('data-filter');
			$('.projects-items').isotope({
				filter: t,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: !1,
				},
			});
		}));
}),
	$(function () {
		'use strict';
		var t = $(window);
		function o() {
			$('#home').css({ height: $(window).height() + 'px' });
		}
		o(),
			t.resize(o),
			$.scrollIt({
				upKey: 38,
				downKey: 40,
				easing: 'swing',
				scrollTime: 600,
				activeClass: 'active',
				onPageChange: null,
				topOffset: -15,
			}),
			t.on('scroll', function () {
				var o = t.scrollTop(),
					a = $('.navbar');
				if (o > 300) {
					a.addClass('fixed-top');
					$('#logo').attr('src', 'images/home/logoBlack.png');
				} else {
					a.removeClass('fixed-top');
					$('#logo').attr('src', 'images/home/logoWhite.png');
				}
			}),
			(function () {
				if ($('section.stats').length > 0) {
					var t = 0;
					$(window).on('scroll', function () {
						var o =
							$('section.stats').offset().top -
							window.innerHeight;
						0 == t &&
							$(window).scrollTop() > o &&
							($('section.stats .single-stat .counter').each(
								function () {
									var t = $(this),
										o = t.attr('data-count');
									$({ countNum: t.text() }).animate(
										{ countNum: o },
										{
											duration: 2e3,
											easing: 'swing',
											step: function () {
												t.text(
													Math.floor(this.countNum)
												);
											},
											complete: function () {
												t.text(this.countNum);
											},
										}
									);
								}
							),
							(t = 1));
					});
				}
			})(),
			$('.nav-item .nav-link').on('click', function () {
				$('.navbar-collapse').removeClass('show');
			}),
			t.stellar({ horizontalScrolling: !1 }),
			$('.blogs .owl-carousel').owlCarousel({
				loop: !0,
				margin: 30,
				autoplay: !0,
				smartSpeed: 500,
				responsiveClass: !0,
				dots: !1,
				responsive: {
					0: { items: 1 },
					700: { items: 2 },
					1e3: { items: 3 },
				},
			}),
			$('.testimonials .owl-carousel').owlCarousel({
				items: 1,
				loop: !0,
				autoplay: !1,
				smartSpeed: 1000,
			}),
			$('#contact-form').on('submit', function (t) {
				t.preventDefault();
				$(this).attr('action');
				$('#form-submit').val('Wait...');
				var o = $('#contact-name').val(),
					a = $('#contact-email').val(),
					e = $('#contact-message').val(),
					n = 0;
				$('.con-validate', this).each(function () {
					'' == $(this).val()
						? ($(this).addClass('con-error'), (n += 1))
						: $(this).hasClass('con-error') &&
						  ($(this).removeClass('con-error'), n > 0 && (n -= 1));
				}),
					0 === n
						? $.ajax({
								type: 'POST',
								url: 'mail.php',
								data: {
									con_name: o,
									con_email: a,
									con_message: e,
								},
								success: function (t) {
									$(
										'#contact-form input, #contact-form textarea'
									).val(''),
										$(
											'#contact-submit.primary-button span'
										).html('Done!'),
										$(
											'#contact-submit.primary-button'
										).addClass('ok'),
										console.log(t);
								},
								error: function (t, o) {
									$(
										'#contact-submit.primary-button span'
									).html('Failed!');
								},
						  })
						: console.log('Validation Error');
			}),
			$('.con-validate').keyup(function () {
				$(this).removeClass('con-error');
			});
	});
