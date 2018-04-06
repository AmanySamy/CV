/*global $, alert, console */

$(function() {
	'use strict';
	
	$('html').niceScroll();
	//$(".main-page").niceScroll();

	$('[data-toggle="tooltip"]').tooltip();

	$(".port").hover(
		function(){
		$(this).children().first().show(500);
		},
		function(){
		$(this).children().first().hide(500);
		}
	);

	
	$(".main-page").css("height",$(".side-page").height());
	$(".main-page").niceScroll();

});