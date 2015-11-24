(function($){
	/** The actual plugin */
	$.fn.beastmode = function(){
		/** When the button is clicked it starts the function */
		$('.button').click(function() {
			/** Targets the <body>, <h1>, <p>, and <img> elements of the page and changes them. */
			/** NOTE: ALL THE ELEMENTS ARE TARGETTED!!!*/
		    $('body').css('background', 'url(ya.jpg)');
		    $('h1').css('color', '#990000').css('font-size', '100px').css('text-decoration', 'underline').text('RAWWWWRRRR!!!');
		    $('p').hide();
		    $('img').attr('src', 'badass.jpg');
		});
	}
})(jQuery);