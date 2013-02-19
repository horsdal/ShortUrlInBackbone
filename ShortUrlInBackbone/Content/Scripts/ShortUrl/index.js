ShortUrl = {
  init: function() {
    var mainForm = new ShortUrl.MainFormView({ el: "#mainForm" });
    
    var listOfUrls = new ShortUrl.ShortUrlListView({ collection: new ShortUrl.ShortenedUrlsCollection()});
    $("#listOfShortenedUrls").html(listOfUrls.el);
  }
}