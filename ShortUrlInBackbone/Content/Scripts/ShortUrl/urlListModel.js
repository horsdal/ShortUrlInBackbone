ShortUrl.ShortenedUrlModel = Backbone.Model.extend({
  url: "/shortenedUrls",

  initialize: function () {
    this.set({ shortUrl: new Date().getTime() % 10000 });
  },

  validate: function (attrs) {
    if (_.isEmpty(attrs.longUrl))
      return "Needs a long url";
  }
});

ShortUrl.ShortenedUrlsCollection = Backbone.Collection.extend({
  initialize: function () {
    this.add({ shortUrl: "short.ly/1", longUrl: "www.longurlplease.com" });
    this.add({ shortUrl: "short.ly/2", longUrl: "www.longurlplease.com" });
    this.add({ shortUrl: "short.ly/3", longUrl: "www.longurlplease.com" });
  },

  url: "/shortenedUrls",
  model: ShortUrl.ShortenedUrlModel
});

