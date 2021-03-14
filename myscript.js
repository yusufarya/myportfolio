// Parallax
// ABOUT
$(window).on('load', function() {
	$('.p-tengah').addClass('p-Muncul');
	$('.bagian-kiri').addClass('b-Muncul');
	$('.bagian-kanan').addClass('b-Muncul');
	$('section').addClass('muncul');
	// $('a img').addClass('a img.label:hover');
});

// $(window).scroll(function () {
// 	var wScroll = $(this).scrollTop();

// 	// Jumbotron //
// 	$('p.label').css({
// 		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
// 	});
// });