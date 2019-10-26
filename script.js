    var mealType = "breakfast"
    //$(this).attr("data-attr");
    var queryURL = "https://api.edamam.com/search?q=" + mealType + "&app_id=$%7B12fc1523%7D&app_key=$%7B97aee21b6757a0b5b1eade0f194a5c24%7D&mealType" + mealType;

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        for (var i = 0; i < 6; i++) {
            var recipe = JSON.stringify(response.hits[i].recipe.label);
            var imgSrc = JSON.stringify(response.hits[i].recipe.image);

            if (mealType === "breakfast") {

                $('.columns').append(`<div class="column" data-attr="breakfast">

            <!--Img-->
                 <img class="recipeImg" src= ${imgSrc}>
    
             <!--text row-->
                 <h2 class="recipeLabel">${recipe} </h2>


            <!--button row-->     
            <button class="popUp"> View Recipe </button>`);


            } else if (mealType === "lunch") {
                $('.columns').append(`<div class="column" data-attr="lunch">

            <!--Img-->
                 <img class="recipeImg" src= ${imgSrc}>
    
             <!--text row-->
                 <h2 class="recipeLabel">${recipe} </h2>


            <!--button row-->     
            <button class="popUp"> View Recipe </button>`);

            } else {
                $('.columns').append(`<div class="column" data-attr="dinner">

            <!--Img-->
                 <img class="recipeImg" src= ${imgSrc}>
    
             <!--text row-->
                 <h2 class="recipeLabel">${recipe} </h2>


            <!--button row-->     
            <button class="popUp"> View Recipe </button>`);
            }
        }
    })