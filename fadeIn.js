$(document).ready(function(){

/*! Fades in page on load */
$('body').css('display', 'none');
$('body').fadeIn(500);

});
	
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$(".scrollbar").css({"opacity" : "0"})
				}else{
			$(".scrollbar").css({"opacity" : "1"})
			}
		})
});
