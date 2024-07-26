
jQuery(document).ready(function(){


	//respopnsive menu start

	jQuery(".bars").click(function(){

		jQuery(".menu-area ul").slideToggle();
	})

	jQuery(window).resize(function(){

		var  screnwidth = jQuery(window).width();

		if(screnwidth>768){

			jQuery(".menu-area ul").removeAttr("style");
			jQuery("body").removeClass(".container");
		}
	});

	//responsive menu end


	//scroll top icon setup

	jQuery(".scrolltop").click(function(){

		jQuery("html").animate({'scrollTop' : '0px'},1000);
	});

	
	jQuery(window).scroll(function(){

		var height = jQuery(window).scrollTop();


		if(height> 500){
			jQuery(".scrolltop").show();
		}
		else{
			jQuery(".scrolltop").hide();
		}

	})


	//scroll top icon end


	//scroll bottom icon start
		jQuery(".scrollbottom").click(function(){

		jQuery("html").animate({'scrollTop' : jQuery("html").get(0).scrollHeight},1000);
		return false
	});

		jQuery(window).scroll(function(){

		var height = jQuery(window).scrollTop();


		if(height< 500){
			jQuery(".scrollbottom").show();
		}
		else{
			jQuery(".scrollbottom").hide();
		}

	})

 	//scroll bottom icon end





	//contact form setup start

		jQuery(".contact form").submit(function(){

			if (jQuery("input[type='text']").val() == '') {
				/*jQuery("input[type='text'],input[type='email'],input[type='password']").*/alert("Fill Up form");
			}
			else if(jQuery("input[type='email']").val() == ''){
				/*jQuery("input[type='text'],input[type='email'],input[type='password']").*/alert("Fill Up form");
			}
			else{
				alert("Message Sent Successfylly");
			}			

		});


	//contact form setup end	
		



			

	



});


