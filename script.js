var userSearch = $(".user-search");
var userStartDate = $("user-start-date")
var userStartDate = $("user-end-date")

var input = "corona virus";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + input + "&api-key=HWlDcliekRAsANCpbWLTGjfohdoE7lpJ"


function getArticle() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    for (var i = 0; i < 10; i++) {
      var articleHead = $("<a>")
      articleHead.attr("href", response.response.docs[i].web_url);
      articleHead.html(response.response.docs[i].headline.main + '</br>Date: ' + response.response.docs[0].pub_date);
      articleHead.append('</br></br>')
      $(".results").append(articleHead);
    }
  });
}

getArticle();