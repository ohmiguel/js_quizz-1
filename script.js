$(document).ready(function(){

var nbQuestion = 1;
$(".question").hide();

$("#start").click(function(){
	console.log("starting");
	$("#q"+nbQuestion).show("slide");
});

$("#next").click(function(){
	nbQuestion=nbQuestion+1;
	$(".question").show("slide");
});

$("#previous").click(function(){
	nbQuestion=nbQuestion-1;
	$(".question").hide("slide");

});


$('#q1').css('color', 'green')
$('#q1').css('color', 'green')
"background-color", "yellow");
