$("#submit").on("click", function (event) {
    event.preventDefault();
    

     function validsurvey() {
         var valid = true;
         $(".form-control").each(function() { 
             if ($(this).val() === "No response Yet"){
                 valid = false;
             }
             
         });
         $(".selection").each(function() { 
             if ($(this).val() === ""){
                 valid = false;
             }
             
         });
        
    };

    if (validateForm()) {

        // grabs the form elements
        var newFriend = {
          name: $("#your-name").val().trim(),
          profilePic: $("#your-image").val().trim(),
          scores: [
            $("#question1").val(),
            $("#question2").val(),
            $("#question3").val(),
            $("#question4").val(),
            $("#question5").val(),
            $("#question6").val(),
            $("#question7").val(),
            $("#question8").val(),
            $("#question9").val(),
            $("#question10").val(),
            $("#question11").val(),
            $("#question12").val(),
          ]
        };
    
    $("#your-name").val("");
    $("#your-image").val("");
    $(".selection").val("");

    $.post("/api/friends", newFriend,
          function (data) {
            // console.log(newFriend);

            $("#match-name").text(data.name);
            $("#match-image").attr("src", data.profilePic);
           
        
          });
      } else {

        alert("Finish or no Friend for you");


        // Clear the form when submitting improperly filled questionnaire
        $("#your-name").val("");
        $("#your-image").val("");
        $(".selection").val("");
      }
    });

