ShortUrl.MainFormView = Backbone.View.extend({
  initialize: function() {
    this.render();
    
    this.longUrl = this.$("#longUrlTextInput");
  },
  
  render: function () {
    var template = $("#mainFormTemplate").html();
    $(this.el).html(template);
    return this;
  },
  
  events: {
    "click button" : "add"
  },
  
  add: function () {
    var newItem = new ShortUrl.ShortenedUrlModel({ longUrl: this.longUrl.val() });
    if (newItem.isValid())
      this.options.urlColl.add(newItem);
  }
});
