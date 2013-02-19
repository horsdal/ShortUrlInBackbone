ShortUrl = {
  init: function() {
    ShortUrl.urlCollection = new ShortUrl.ShortenedUrlsCollection();

    new ShortUrl.MainFormView({ el: "#mainForm", urlColl: ShortUrl.urlCollection });

    var listOfUrls = new ShortUrl.ShortUrlListView({ collection: ShortUrl.urlCollection });
    $("#listOfShortenedUrls").html(listOfUrls.el);
  }
}