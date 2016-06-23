
$("#tabelle").DataTable({
	"ajax" : "data.json",
	"order" : [[ 1, "asc" ]],
	"lengthMenu": [5, 10, 25]
});



$("#button").tooltipster({
	content: $("#hover-sachen").detach(),
	position: 'bottom'
});