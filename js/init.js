(function($){
	$(function(){
		$('.sidenav').sidenav();
		$('.parallax').parallax();
		$('#textarea1').val('New Text');
	M.textareaAutoReside($('#textarea1'));
	});
})(jQuery);