ShortUrl = {
  init: function() {
    var urlColl = new ShortUrl.ShortenedUrlsCollection();

    var mainForm = new ShortUrl.MainFormView({ el: "#mainForm", urlColl: urlColl });

    var listOfUrls = new ShortUrl.ShortUrlListView({ collection: urlColl });
    $("#listOfShortenedUrls").html(listOfUrls.el);
  }
}