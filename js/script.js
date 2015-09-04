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
		var nombre = $("#txtNombre").value;
		var telefono = $("#txtTelefono").value;
		var email = $("#txtEmail").value;
		var contacto = nombre + " - " + telefono + " - " + email;
		$("#listaContactos").append($("<li />").text("marcos"));
		$("#pnlContactos").slideDown("slow");
		$("#pnl").slideUp("slow");
	})

	$("#listaContactos").append("<li>Medina Marcos 132654654 marcos@inaf.com</li>");
});




