$(document).ready(function() {
  $("form#custDetails").submit(function(event) {
    event.preventDefault();
    var firstname = $("#firstName").val();
    var lastname = $("#lastName").val();
    var address = $("#address").val();
    var fullname = (firstname + " " + lastname);
    $("#output").text(fullname);
    $("#shippingAddress").text(address);
  });
});





function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
};
