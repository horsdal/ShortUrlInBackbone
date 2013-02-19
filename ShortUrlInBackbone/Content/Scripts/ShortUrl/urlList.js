﻿ShortUrl.ShortenedUrlModel = Backbone.Model.extend({

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
    var longUrl = this.model.get("longUrl");
    if (new URI(longUrl).scheme === null) 
      longUrl = "http://" + longUrl;
    window.open(longUrl, "_blank");
  }
});

ShortUrl.ShortUrlListView = Backbone.View.extend({
  tagName : "table",
  className: "table table-striped",
  
  initialize: function () {
    this.collection.bind("reset", this.render, this);
    this.collection.bind("add", this.render, this);
    this.collection.bind("remove", this.render, this);
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