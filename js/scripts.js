
jQuery(document).ready(function(){

	jQuery(".bars").click(function(){

		jQuery(".menu-area ul").slideToggle();
	})

	jQuery(window).resize(function(){

		var  screnwidth = jQuery(window).width();

		if(screnwidth>768){

			jQuery(".menu-area ul").removeAttr("style");
		}
	});





});


