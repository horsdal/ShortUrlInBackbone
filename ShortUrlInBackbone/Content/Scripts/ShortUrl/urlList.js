ShortUrl.ShortenedUrlModel = Backbone.Model.extend({

});

ShortUrl.ShortenedUrlsCollection = Backbone.Collection.extend({
  initialize : function() {
    this.add({shortUrl : "short.ly/1", longUrl : "www.longurlplease.com" });
    this.add({shortUrl : "short.ly/2", longUrl : "www.longurlplease.com" });
    this.add({shortUrl : "short.ly/3", longUrl : "www.longurlplease.com" });
  },

  model: ShortUrl.ShortenedUrlModel
});

ShortUrl.ShortUrlItemView = Backbone.View.extend({
  tagName : "tr",
  
  initialize: function () {
    this.render();
  },

  render: function () {
    var template = $("#urlListItemTemplate").html();
    var row = _.template(template, this.model.toJSON());
    $(this.el).html(row);
    return this;
  },
  
  events: {
    "click button" : "go"
  },
  
  go : function() { 
     window.open("http://www.longurlplease.com", "_blank");
  }
});

ShortUrl.ShortUrlListView = Backbone.View.extend({
  tagName : "table",
  className: "table table-striped",
  
  initialize: function() {
    this.render();
  },

  render: function () {
    var elms = [];
    this.collection.each(function (model) {
      elms.push((new ShortUrl.ShortUrlItemView({model: model})).el);
    });
    $(this.el).html(elms);
    return this;
  }
})