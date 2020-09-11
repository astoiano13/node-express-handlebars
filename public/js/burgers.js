
$(function() {
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var newStatus = $(this).data("newStatus");
  
      var newFoodStatus = {
        devoured: newStatus
      };

      
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newFoodStatus
      }).then(
        function() {
          console.log("changed status to", newStatus);
          
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
     
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          
          location.reload();
        }
      );
    });
  });
  