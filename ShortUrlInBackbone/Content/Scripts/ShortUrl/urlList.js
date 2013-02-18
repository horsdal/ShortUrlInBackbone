ShortUrl.ShortUrlItemView = Backbone.View.extend({
  tagName : "tr",
  
  render : function() {
    $(this.el).html("<td>ShortUrl</td><td> -> </td><td>LongUrl</td>");
    return this;
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