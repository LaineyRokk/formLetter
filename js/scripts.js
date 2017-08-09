$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var name = $("input.person1").val();

    $(".person1").text(name);

    $("#story").show();
    event.preventDefault();
  })
})
