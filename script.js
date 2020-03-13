function searchArticle(search){

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ddEFQ1ZXm9J5jga4O39qd0scl6B0EPER&q=" + search;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });

}

searchArticle("plants");

