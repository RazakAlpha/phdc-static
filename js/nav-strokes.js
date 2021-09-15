var APP = APP || {};

APP.mobileNavigation =  (function () {

	var $menuToggle = $('#mobile-navigation-toggle'),
		$menu = $('.navigation.primary > ul'),
		$menuItem = $('.navigation.primary > ul li a'),
		$menuActive = $('.navigation.primary > ul li.active > ul'),
		winWidth = $(window).width(),
		breakPoint = 768, // Update this if the mobile breakpoint ever changes
		defaults = {
			speed: 250,
			openMenu: false,
			nth: 1,
			headerLinks: false // If false and if top level item has children, this will be disabled on first click, allowing its children to display. Second click will navigate.
		},
		options = {};

	function init(initObj) {

		options = $.extend(defaults, initObj);

		// show / hide top level mobile nav
		$menuToggle.on('click', function (e) {
			e.preventDefault();
			$(this).toggleClass('toggle-active')
		});

  }

	return {
		init: init
	};

} ());



$(document).ready(function () {
    APP.mobileNavigation.init();
});