ShortUrl.MainFormView = Backbone.View.extend({
  initialize: function() {
    this.render();
    
    this.longUrl = $("#longUrlTextInput");
  },
  
  render: function () {
    var template = $("#mainFormTemplate").html();
    $(this.el).html(template);
    return this;
  },
  
  events: {
    "click button" : "sayHello"
  },
  
  sayHello: function () {
    var newItem = new ShortUrl.ShortenedUrlModel({ shortUrl: new Date().getTime() % 10000, longUrl: this.longUrl.val() })
    if (newItem.isValid())
      this.options.urlColl.add(newItem);
  }
});
