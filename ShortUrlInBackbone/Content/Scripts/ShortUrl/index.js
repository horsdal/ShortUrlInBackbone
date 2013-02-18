ShortUrl = {
  init: function() {
    var mainForm = new ShortUrl.MainFormView({ el: "#mainForm" });
    mainForm.render();
    
    var listOfUrls = new ShortUrl.ShortUrlListView({ el: "#listOfShortenedUrls" });
    listOfUrls.render();
  }
}