

var input = "corona virus";
// <<<<<<< HEAD
// NYT search article

// api keyt for search
// 
// =======


$(".Search").click(function(){
  var userSearch = $(".userSearch").val();
  var articleNum = $(".inputGroupSelect01");
  var userStartDate = $(".userSearchDate");
  var userStartDate = $(".userEndDate");

  
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userSearch + "&api-key=HWlDcliekRAsANCpbWLTGjfohdoE7lpJ"


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
});
// >>>>>>> master






















// Get our user input and append to the Query URL
console.log($("#userSearch"));