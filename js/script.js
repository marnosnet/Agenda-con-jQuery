$(document).ready(function () {
	$("h1").text("Agenda de Marcos");
	//$("h2").text("soy un H2");
	$("#btnNuevo").click(function () {
		$("#pnl").slideDown("slow");
		$("#pnlContactos").slideUp("slow");
	});
	$("#btnCancelar").click(function () {
		$("#pnlContactos").slideDown("slow");
		$("#pnl").slideUp("slow");
	});
	$("#btnGuardar").click(function () {
		var nombre = $("#txtNombre").val();
		var telefono = $("#txtTelefono").val();
		var email = $("#txtEmail").val();
		var contacto = nombre + " - " + telefono + " - " + email;
		$("#listaContactos").append("<li>" + contacto + "</li>");
		$("#pnlContactos").slideDown("slow");
		$("#pnl").slideUp("slow");
	})

	$("#listaContactos").append("<li>Medina Marcos 132654654 marcos@inaf.com</li>");
});




