var mealType
var recipes
var num
var numToDisplay
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


// Creates AJAX call for the specific movie button being clicked


function recipeCall() {
    $.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    recipes = response;
    displayRecipes(6)
});
}
    

$('#seeMore').on('click', function () {
    displayRecipes(12)
});



function displayRecipes(num) {
    $(".columns").empty();
    for (var i = 0; i < num; i++) {
        var recipe = JSON.stringify(recipes.hits[i].recipe.label);
        var imgSrc = JSON.stringify(recipes.hits[i].recipe.image);

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
            $('.columns').append(`<div class="column" data-attr={"dinner"}>
        <!--Img-->
             <img class="recipeImg" src= ${imgSrc}>
         <!--text row-->
             <h2 class="recipeLabel">${recipe} </h2>
        <!--button row-->     
        <button class="popUp"> View Recipe </button>`);
        }
    }
}


if (currentHour > 0 && currentHour < 11) {
    $(".subtitle").text("It's breakfast time!")
    mealType = "breakfast"
    queryURL = "https://api.edamam.com/search?q=breakfast&app_id=$%7B12fc1523%7D&app_key=$%7B97aee21b6757a0b5b1eade0f194a5c24%7D&mealType=" + mealType;
    recipeCall();
} else if (currentHour >= 11 && currentHour < 16) {
    $(".subtitle").text("It's lunch time!");
    mealType = "lunch"
    queryURL = "https://api.edamam.com/search?q=lunch&app_id=$%7B12fc1523%7D&app_key=$%7B97aee21b6757a0b5b1eade0f194a5c24%7D&mealType=" + mealType;
    recipeCall();
} else {
    $(".subtitle").text("It's dinner time!");
    mealType = "dinner"
    queryURL = "https://api.edamam.com/search?q=dinner&app_id=$%7B12fc1523%7D&app_key=$%7B97aee21b6757a0b5b1eade0f194a5c24%7D&excluded=rolls&excluded=icecream&excluded=pancakes&mealType=" + mealType;
    recipeCall();
}


$("#breakfastBox").click(function () {
    $(".subtitle").text("It's breakfast time!")
    mealType = "breakfast"
    queryURL = "https://api.edamam.com/search?q=breakfast&app_id=$%7B12fc1523%7D&app_key=$%7B97aee21b6757a0b5b1eade0f194a5c24%7D&mealType=" + mealType;
    recipeCall();
})


$("#lunchBox").click(function () {
    $(".subtitle").text("It's lunch time!");
    mealType = "lunch"
    queryURL = "https://api.edamam.com/search?q=lunch&app_id=$%7B12fc1523%7D&app_key=$%7B97aee21b6757a0b5b1eade0f194a5c24%7D&mealType=" + mealType;
    recipeCall();
})


$("#dinnerBox").click(function () {
    $(".subtitle").text("It's dinner time!");
    mealType = "dinner"
    queryURL = "https://api.edamam.com/search?q=dinner&app_id=$%7B12fc1523%7D&app_key=$%7B97aee21b6757a0b5b1eade0f194a5c24%7D&excluded=rolls&excluded=cream&excluded=pancakes&mealType=" + mealType;
    recipeCall();
})

