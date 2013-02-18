ShortUrl.ShortUrlItemView = Backbone.View.extend({
  tagName : "li",
  
  render : function() {
    $(this.el).html("ShortUrl -> LongUrl");
    return this;
  }
});

ShortUrl.ShortUrlListView = Backbone.View.extend({
  tagName: "ul",
  
  render: function () {
    var elms = [];
    for (var i = 0; i < 10; i++) {
      elms.push((new ShortUrl.ShortUrlItemView()).render().el);
    }
    $(this.el).html(elms);
    return this;
  }
})