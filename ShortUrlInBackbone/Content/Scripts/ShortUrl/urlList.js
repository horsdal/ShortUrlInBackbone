ShortUrl.ShortUrlItemView = Backbone.View.extend({
  tagName : "tr",
  
  render: function () {
    var template = $("#urlListItemTemplate").html();
    var row = _.template(template, { shortUrl: "short.ly/deadbeef", longUrl: "www.longurlplease.com" });
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

  render: function () {
    var elms = [];
    for (var i = 0; i < 10; i++) {
      elms.push((new ShortUrl.ShortUrlItemView()).render().el);
    }
    $(this.el).html(elms);
    return this;
  }
})