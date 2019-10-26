var mealType= "breakfast"
var queryURL = "https://api.edamam.com/search?q=breakfast&app_id=$%7B12fc1523%7D&app_key=$%7B97aee21b6757a0b5b1eade0f194a5c24%7D&mealType=breakfast";
 
//  function defaultRecipe() {

$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(data) {

    console.log(data);
    console.log("test");

  });



// click listener for meal time buttons

//click listener for see more 

// click listener 

// search bar functionality utilizing API stuff 


// click listener for recipie card pop out
// $(".recipieAPI")





// // FOR LOOP TO DISPLAY BREAKFAST LUNCH OR DINNER AFTER MOMENT
  for (var i = 1; i < 12; i++) {
  if (mealType = "breakfast"){

      $('.columns').append(`<div class="column" data-attr="breakfast">
    
             <!--text row-->
                 <h2 class="recipeLabel"> RecipeLable </h2>
    
             <!--Img-->
                 <img class="recipeImg" scr= imgSrc>`);
  }
  else if (mealType = "lunch"){
      $('.columns').append(`<div class="column" data-attr="lunch">
    
             <!--text row-->
                 <h2 class="recipeLabel"> RecipeLable </h2>
    
             <!--Img-->
                 <img class="recipeImg" scr= imgSrc>`);
  }

  else if (mealType = "dinner"){
      $('.columns').append(`<div class="column" data-attr="dinner">
    
             <!--text row-->
                 <h2 class="recipeLabel"> RecipeLable </h2>
    
             <!--Img-->
                 <img class="recipeImg" scr= imgSrc>`);
  }
  };
