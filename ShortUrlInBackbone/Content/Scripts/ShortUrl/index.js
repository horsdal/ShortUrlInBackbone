ShortUrl = {
  init: function() {
    var mainForm = new ShortUrl.MainFormView({ el: "#mainForm" });
    
    var listOfUrls = new ShortUrl.ShortUrlListView();
    $("#listOfShortenedUrls").html(listOfUrls.el);
  }
}