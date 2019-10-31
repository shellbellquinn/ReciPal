var mealType 
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
        var recipeSource = JSON.stringify(response.hits[i].recipe.source);
        var recipeLink = JSON.stringify(response.hits[i].recipe.url)
        var dietRestrict = JSON.stringify(response.hits[i].recipe.cautions);
        var ingredients = JSON.stringify(response.hits[i].recipe.ingredientLines[i]);
       
       

        if (mealType === "breakfast") {

            $('.columns').append(`<div class="column" data-attr="breakfast">
        <!--Img-->
             <img class="recipeImg" src= ${imgSrc}>

         <!--text row-->
             <h2 class="recipeLabel">${recipe} </h2>

        <!--button row-->     
        <button class="popUp" data-stuff=${recipe} data-source=${recipeSource} data-restriction=${dietRestrict} data-ingredient=${ingredients} data-link=${recipeLink}> View Recipe </button>`);

      


        } else if (mealType === "lunch") {
            $('.columns').append(`<div class="column" data-attr="lunch">
        <!--Img-->
             <img class="recipeImg" src= ${imgSrc}>

         <!--text row-->
             <h2 class="recipeLabel">${recipe} </h2>
        <!--button row-->     
        <button class="popUp" data-stuff=${recipe} data-source=${recipeSource} data-restriction=${dietRestrict} data-ingredient=${ingredients} data-link=${recipeLink}}"> View Recipe </button>`);

        } else {
            $('.columns').append(`<div class="column" data-attr="dinner">
        <!--Img-->
             <img class="recipeImg" src= ${imgSrc}>

         <!--text row-->
             <h2 class="recipeLabel">${recipe} </h2>
        <!--button row-->     
        <button class="popUp" data-stuff=${recipe} data-source=${recipeSource} data-restriction=${dietRestrict} data-ingredient=${ingredients} data-link=${recipeLink}> View Recipe </button>`);
        }
       
       
    }
    // click lisener for recipe modal display
    $(".popUp").on("click", function () {
        // variables based on data attributes
        var restrictData = $(this).data("restriction");
        var sourceData = $(this).data("source");
        var ingredientData = $(this).data("ingredient");
        var linkData = $(this).data("link")
        
        // What's actually written in the modal
        $(".modal-wrap").css("display", "block").html("Source: " + sourceData + "<br>" + "Ingredients: " + ingredientData + "<br>" + "Dietary Restrictions: " + restrictData + "<br>" + "Get the Recipe! " + linkData +"<br>" + "click to close<br>");

        console.log(ingredientData)
        });

        // closes the modal by clicking on it
     $("#recipeModal").on("click", function () {
        $(this).hide();
        })
    
    
})



 // moment meal suggestion 
 var zeroTest = 0
 var nineTime = moment().set("hour", 9).format("H");
 var tenTime = moment().set("hour", 10).format("H");
 var elevenTime = moment().set("hour", 11).format("H");
 var twelveTime = moment().set("hour", 12).format("H");
 var oneTime = moment().set("hour", 13).format("H");
 var twoTime = moment().set("hour", 14).format("H");
 var threeTime = moment().set("hour", 15).format("H");
 var fourTime = moment().set("hour", 16).format("H");
 var fiveTime = moment().set("hour", 17).format("H");
 var sixTime = moment().set("hour", 18).format("H");
 var sevenTime = moment().set("hour", 19).format("H");
 var eightTime = moment().set("hour", 20).format("H");

// //console.log(tenTime)

 var hourNow = moment().format('MMMM Do YYYY, HH:mm:ss a')

 var currentHour = moment().format('H')

 //breakfast lunch and dinner time
 // if now > 0 && < 12
//console.log(currentHour)



if (currentHour > 0 && currentHour < 11) {
    $(".subtitle").text("It's breakfast time!")
    mealType === "breakfast"
}
//  block of code to be executed if condition1 is true
else if (currentHour >= 11 && currentHour < 16) {
    $(".subtitle").text("It's lunch time!");
    mealType === "lunch"
} else {
    $(".subtitle").text("It's dinner time!");
    mealType = "dinner"
}


//  block of code to be executed if the condition1 is false and condition2 is true
// if (currentHour > 4 && currentHour < 8){
//  $(".subtitle").text("It's dinner time!")
//  }
// else (currentHour > 8)
// $(".subtitle").text("It's dinner or snack time!");





//click listener for meal time buttons
//breakfast button
// $("#breakfastBox").click(function () {

// });

// // lunch button

// $("#lunchBox").click(function () {

// });
// // dinner button 

// $("#dinnerBox").click(function () {

// });


// //click listener for see more 

// click listener 