$( document ).ready( function() {


$('#us-js').hover( function() {
	$('.border').removeClass('activo');
	$(this).addClass('activo');
}, function() {
	$(this).removeClass('activo');
});

$('#mission-js').hover( function() {
	$('.border').removeClass('activo');
	$(this).addClass('activo');
}, function() {
	$(this).removeClass('activo');
});

$('#view-js').hover( function() {
	$('.border').removeClass('activo');
	$(this).addClass('activo');
}, function() {
	$(this).removeClass('activo');
});


$('#us-js').click( function() {
	$('.border').removeClass('activo selected');
	$(this).addClass('selected');
});

$('#mission-js').click( function() {
	$('.border').removeClass('activo selected');
	$(this).addClass('selected');
});

$('#view-js').click( function() {
	$('.border').removeClass('activo selected');
	$(this).addClass('selected');
});









});