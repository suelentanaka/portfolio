
//***************Suelen Tanaka 02.12.2018***************//

function progressbar(){
	$("#html").css('width', '90%');
	$("#css").css('width', '90%');
	$("#js").css('width', '85%');
	$("#bs").css('width', '83%');
	$("#jq").css('width', '81%');
	$("#python").css('width', '75%');
}


function skillsFunction(){
	window.location.reload(false);
}

var typed = new Typed('#typed', {
	stringsElement: "#typed-strings",
	typeSpeed: 30,
	fadeOut: true
});




jQuery(document).ready(function() {
	var offset = 250;
	var duration = 300;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
	}
});
 
 
 
jQuery('.back-to-top').click(function(event) {
	event.preventDefault();
	jQuery('html, body').animate({scrollTop: 0}, duration);
	return false;
})
});