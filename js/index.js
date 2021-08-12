$(function(){
	$("[data-toggle=\"tooltip\"]").tooltip();
	$("[data-toggle=\"popover\"]").popover();
	$('#carouselControls').carousel({
        interval: 4000
    });
    $('#contact').on('show.bs.modal', function (e) {
  	    console.log("Se muestra");
  		$('.contactoBTN').addClass('btn-danger');
    	$('.contactoBTN').prop('disabled', true);		
	});
	$('#contact').on('shown.bs.modal', function (e) {
		console.log("Se mostro");
	});
	$('#contact').on('hide.bs.modal', function (e) {
		console.log("Se oculta");
	});
	$('#contact').on('hidden.bs.modal', function (e) {
		console.log("Se oculto");
		$('.contactoBTN').removeClass('btn-danger');
		$('.contactoBTN').prop('disabled', false);
    });
	$(document).on('click', 'input[type="button"]', function(event) {
		let id = this.id;
		console.log("Se presionó el Boton con Id :"+ id)
	});
});
  	
$(document).ready(function(){
	$("#AlertSuccess").hide();
})
function myFunction() {
    //$("#AlertSuccess").show();
}
function myclose() {
	$("#AlertSuccess").hide();
}