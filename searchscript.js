$( document ).ready(function() {

var mealType
var display
var num
var numToDisplay
var q
var dishType
var queryURL
var cuisineType
var dietLabels

// Creates AJAX call for the recipes
function recipeCall() {
    $.ajax({
        url: queryURL,
        method: "GET" 
    }).then(function (response) {
        display = response;
        displayRecipes(6)
    });
}

//see more and see less options on main page
$("#seeMore").on("click", function () {
    $("#seeLess").show()
    $("#seeMore").hide()
    displayRecipes(12)
});

$("#seeLess").on("click", function () {
    $(this).hide()
    displayRecipes(6)
});

//The page loads to display 6 or 12 popular breakfast lunch or dinner foods depending on the time and buttons pressed
function displayRecipes(num) {
    $(".columns").empty();
    for (var i = 0; i < num; i++) {
        var recipes = JSON.stringify(display.hits[i].recipe.label);
        var imgSrc = JSON.stringify(display.hits[i].recipe.image);


            $('.columns').append(`<div class="column" data-attr={"dinner"}>
        <!--Img-->
             <img class="recipeImg" src= ${imgSrc}>
         <!--text row-->
             <h2 class="recipeLabel">${recipes} </h2>
        <!--button row-->     
        <button class="popUp"> View Recipe </button>`);
        }
        $("#seeMore").show()
    }



// build Query URL by checking for form inputs
    //find q
$("#submit").click(function findQ(){
    //check for q
    if ($("#search").val() === ""){
        $("#searchError").html("*This feild is required.");
    }
    else {
        q = $("#search").val()
        findMealType()
    }
});

    //find meal
function findMealType(){
    mealType = $("#mealType").find("option:selected").val();
    findDish();
    }

    //find dishType
function findDish(){
     dishType = $("#dishType").find("option:selected").val();
     findCuisine();
     }

    //find cuisineType
function findCuisine(){
     cuisineType = $("#cuisineType").find("option:selected").val();
     findDiet();
     }

    //find healthLabels
function findDiet(){
     dietLabels = $("#dietLabels").find("option:selected").val();
     buildQuery();
     }

//build query url based on form inputs
function buildQuery(){
    queryURL = "https://api.edamam.com/search?q=" + q + "&app_id=$%7B12fc1523%7D&app_key=$%7B97aee21b6757a0b5b1eade0f194a5c24%7D"
    if (mealType === "null") {
    queryURL = queryURL
    recipeCall()
    }
    if (mealType !== "null") {
    queryURL = queryURL + "&mealType=" + mealType
    recipeCall()
    }
    if (dishType === "null") {
        queryURL = queryURL
        recipeCall()
    }
    if (dishType !== "null") {
        queryURL = queryURL + "&dishType=" + dishType
        console.log(dishType)
        recipeCall()
    }
    if (cuisineType === "null") {
        queryURL = queryURL
        recipeCall()
    }
    if (cuisineType !== "null") {
        queryURL = queryURL + "&cuisineType=" + cuisineType
        recipeCall()
    }
    if (dietLabels === "null") {
        queryURL = queryURL
        recipeCall()
    }
    if (dietLabels !== "null") {
        queryURL = queryURL + "&dietLabels=" + dietLabels
        recipeCall()
    }
    
    console.log(queryURL)
}    

});