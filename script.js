var input = "corona virus";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + input + "&api-key=HWlDcliekRAsANCpbWLTGjfohdoE7lpJ"


function getArticle() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });
}

getArticle();