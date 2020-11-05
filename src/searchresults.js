let cocktailName = ""
document
  .getElementById("search-bar")
  .addEventListener('keypress', (event) => {
      if (event.key !="Enter") {
        cocktailName = event.target.value
      }else {
        event.preventDefault()
        searchByName(cocktailName)
        cocktailName = ""
        document.getElementById("search-bar").value = ''
      }
  })

document
  .getElementById("search-button")
  .addEventListener("click", (event) =>{
    cocktailName = document.getElementById("search-bar").value
    event.preventDefault()
    searchByName(cocktailName)
  })

function searchByName(cocktailName) {
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName
    console.log(url)
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName)
        .then(response => response.json() )
        .then(data => {
            console.log(data)
            displayThumbs(data.drinks)} );
}
//console.log(searchByName("alexander"))


var cocktails=[
    {
      drinkName: "Lorem ipsum dolor",
      drinDescription: "Voluptates sit ducimus velit soluta ed doloribus iste commodi deserunt aut unde, numquam illo, unde.",
      drinkIngredients: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p>",
      drinkThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-quinon.jpg",
      drinkImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-quinon5.jpg",
      drinkLink: "article-link1"
    },
    {
      drinkName: "Lorem ipsum dolor",
      drinDescription: "Voluptates sit ducimus velit soluta ed doloribus iste commodi deserunt aut unde, numquam illo, unde.",
      drinkIngredients: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p>",
      drinkThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-quinon.jpg",
      drinkImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-quinon5.jpg",
      drinkLink: "article-link1"
    },
    {
      drinkName: "Lorem ipsum dolor",
      drinDescription: "Voluptates sit ducimus velit soluta ed doloribus iste commodi deserunt aut unde, numquam illo, unde.",
      drinkIngredients: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p>",
      drinkThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-quinon.jpg",
      drinkImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-quinon5.jpg",
      drinkLink: "article-link1"
    },
    {
      drinkName: "Lorem ipsum dolor",
      drinDescription: "Voluptates sit ducimus velit soluta ed doloribus iste commodi deserunt aut unde, numquam illo, unde.",
      drinkIngredients: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p>",
      drinkThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-quinon.jpg",
      drinkImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-quinon5.jpg",
      drinkLink: "article-link1"
    },
    {
      drinkName: "Lorem ipsum dolor",
      drinDescription: "Voluptates sit ducimus velit soluta ed doloribus iste commodi deserunt aut unde, numquam illo, unde.",
      drinkIngredients: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p>",
      drinkThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-quinon.jpg",
      drinkImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-quinon5.jpg",
      drinkLink: "article-link1"
    },
    {
      drinkName: "Lorem ipsum dolor",
      drinDescription: "Voluptates sit ducimus velit soluta ed doloribus iste commodi deserunt aut unde, numquam illo, unde.",
      drinkIngredients: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p>",
      drinkThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-quinon.jpg",
      drinkImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-quinon5.jpg",
      drinkLink: "article-link1"
    }
  ];
  
  
  /*
  Thumbs
  */
  //Loop length:
  function displayThumbs(cocktails){
    $("#search-results").removeClass("no-display")
    //Empty container:
    $(".posts-box").empty();
    console.log(cocktails)
    console.log(cocktails[0])
    //Loop:
    for (i=0; i<cocktails.length; i++) {
        console.log(cocktails[i])
      //Create thumb structure:
      var listItem =
        '<li>'+
          '<div class="card">'+
            '<a class="button" href="" data-obj="'+i+'">'+
              '<img src="'+cocktails[i].strDrinkThumb+'" alt="">'+
            '</a>'+
            '<div>'+
              '<h3>'+cocktails[i].strDrink+'</h3>'+
              '<p class="description" >'+cocktails[i].strInstructions+'</p>'+
            '</div>'+
            '<div>'+
              '<a class="button" href="" data-obj="'+i+'">Explore</a>'+
            '</div>'+
          '</div>'+
        '</li>';
      //Append thumb:
      $(".posts-box").append(listItem);
    };
  }
  
  
  
  /*
  Explore
  */
  var thisElement = 0;
  
  function innerContent(content){
    $(".inner-img").attr("src",cocktails[content].postImg);
    $(".inner-title").html(cocktails[content].drinkName);
    $(".inner-text").html(cocktails[content].drinkIngredients);
  };
  
  //Open recipie:
  $(".button").click(function(e){
    e.preventDefault();
    thisElement = $(this).attr("data-obj");
    innerContent(thisElement);
    $(".modal").css({"display":"block"});
    dissBtn();
  });
  
  //Close recipie:
  $(".close-post, .modal-sandbox").click(function(){
    $(".modal").css({"display":"none"});
  });
  
  //Next cocktail:
  $(".next-post").click(function(e){
    e.preventDefault();
    if (thisElement<postLength-1) {
      thisElement = parseInt(thisElement) + 1;
      innerContent(thisElement);
      dissBtn();
    };
  });
  
  //Prev cocktail:
  $(".prev-post").click(function(e){
    e.preventDefault();
    if (thisElement>0) {
      thisElement = parseInt(thisElement) - 1;
      innerContent(thisElement);
      dissBtn();
    };
  });
  
  //Button disable:
  function dissBtn(){
    $(".prev-post, .next-post").removeClass("disabled");
    if (thisElement<=0){
      $(".prev-post").addClass("disabled");
    }
    else if (thisElement>=postLength-1){
      $(".next-post").addClass("disabled");
    };
  };
  