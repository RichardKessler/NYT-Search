var input = "corona virus";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + input + "&api-key=HWlDcliekRAsANCpbWLTGjfohdoE7lpJ"


function getArticle() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var articleDiv = $("<div>")
    var articleHead = $("<a>")
    articleHead.attr("href", response.response.docs[0].web_url);
    articleHead.text(response.response.docs[0].abstract);
    articleDiv.append(articleHead);
    $(".results").append(articleDiv);
  });
}

getArticle();