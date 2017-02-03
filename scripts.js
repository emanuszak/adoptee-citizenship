$(document).ready(function(){
 	var response
 	var fadeSpeed = 1500;
 	
 	$('#reload').click(function() {
	    location.reload(false);
	});
	
	$( ".respond" ).click(function() {
		var response = ($(this).data('value'));
		$( ".question" ).hide();
		switch (response) {
		  case "start":
		    $( ".intro" ).hide();
		    $( ".step1" ).fadeIn(fadeSpeed);
		    break;
		  case "issued-yes":
		    $( ".step2" ).fadeIn(fadeSpeed);
		    break;
		  case "issued-no":
		    $( ".step3a" ).fadeIn(fadeSpeed);
		    break;
		  case "possess-yes":
		    $( ".success" ).fadeIn(fadeSpeed);
		    break;
		  case "possess-no":
		    $( ".replace" ).fadeIn(fadeSpeed);
		    break;
		  case "under-18":
		    $( ".step3" ).fadeIn(fadeSpeed);
		    break;
		  case "post-1983":
		    $( ".step4" ).fadeIn(fadeSpeed);
		    break;
		  case "pre-1983":
		    $( ".urgent" ).fadeIn(fadeSpeed);
		    break;
		  case "coc-issued-no":
		    $( ".coc-file" ).fadeIn(fadeSpeed);
		  	break;
/*
		  default:
		    $(this).add("<p>Sorry</p>");
*/
		}
	});
});