<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- <link rel="shortcut icon" href="../images/fav_icon.png" type="image/x-icon"> -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.9.1/css/OverlayScrollbars.min.css'>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <!-- Bulma Version 0.8.x-->
    <link rel="stylesheet" href="https://unpkg.com/bulma@0.8.0/css/bulma.min.css" />
    <!-- <link rel="stylesheet" type="text/css" href="../css/hero.css"> -->
    <link rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
    <!-- add to css -->
     <style>
    .columns:nth-child(2)
    {margin-top: -10rem;}
    </style> 
    <title>ReciPal</title>
  
    <body>
    <!--header code-->
    <section class="hero is-info is-small">
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title">
              Recipal
            </p>
            <p class="subtitle">
              Temp text
            </p>
          </div>
        </div>
      </section>

      <!--sub header code-->
      <div class="box cta">
        <p class="has-text-centered">
           If you're in the mood for lunch, dinner or a snack click on the button.
              <button id="breakfastBox">Breakfast</button>
              <button id="lunchBox">Lunch</button>
              <button id="dinnerBox">Dinner</button>
        </p>
      </div>
      
      <div class="searchOption">
          <a href="search.html"> Advanced Search </a>
      </div>
        

      <!--recommended recipes card container-->
                <!-- //The page loads to display 6 popular breakfast lunch or dinner foods depending on the time
                    // use moment.js to determine which mealType is default displayed-->

      <section class="recipeContainer">
      <div class="columns">
        <div class="column">
          <img class="recipeImg">
          <h2 class="recipeLabel"></h2>


        </div>
      </div>
      </section>
      <a id="seeMore"> See More </a>
     

  <!--//I have the choice to switch from breakfast lunch dinner or snack manually and the default display will change to reflect my choice
    // add event listeners to change the defaul mealType to new mealType when button is clicked
    
// If one of those origanal recipes looks good I can click the picture to see more details
    // add event listener to open the recipe card pop up
    
// I also have the option to open a new page to put in search parameters instead of the recommended options
    // add a button or link to search page
    
// future add ons - favorite recipes which will add a recipe card to local storage displayed on a new page 
// future add ons - share options to share recipe with friends -->
    
<script src="https://code.jquery.com/jquery-3.4.1.min.js"
integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.js"></script>

<script src="script.js"></script>

</body>
</html>