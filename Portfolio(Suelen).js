
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