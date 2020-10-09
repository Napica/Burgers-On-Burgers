// Change function to move burger to devoured section.
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
      console.log("changed devoured to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // Function to remove the burger
  $(".delete-burger").on("click", function (event) {
    // console.log("this clicked")
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
