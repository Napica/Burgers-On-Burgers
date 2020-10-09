$(function () {
  $(".change-devoured").on("click", function (event) {
    // console.log("this was clicked")
    
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevour");
    
    var newDevouredState = {
      devoured: newDevoured,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("changed sleep to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
