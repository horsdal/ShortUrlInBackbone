ShortUrl.ShortenedUrlModel = Backbone.Model.extend({
  url: function() {
    return "/shortenedUrls/" + (_.isUndefined(this.id) ? "" : this.id);
  },

  initialize: function () {
    if (this.isNew())
      this.set({ shortUrl: new Date().getTime() % 10000 });
  },

  validate: function (attrs) {
    if (_.isEmpty(attrs.longUrl))
      return "Needs a long url";
  },
});

ShortUrl.ShortenedUrlsCollection = Backbone.Collection.extend({
  url: "/shortenedUrls",
  model: ShortUrl.ShortenedUrlModel,
  comparator : function(model) {
    return model.get("longUrl");
  }
});

