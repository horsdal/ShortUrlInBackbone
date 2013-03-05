ShortUrl.mainformViewTemplate =
  "<div class=\"input-append\"> \
    <input id=\"longUrlTextInput\" type=\"text\" placeholder=\"Long URL\" class=\"span5\" /> \
    <button class=\"btn\">Shorten!</button> \
   </div>";

ShortUrl.MainFormView = Backbone.View.extend({
  initialize: function() {
    this.render();
    
    this.longUrl = this.$("#longUrlTextInput");
  },
  
  render: function () {
    this.$el.html(ShortUrl.mainformViewTemplate);
    return this;
  },
  
  events: {
    "click button" : "add"
  },
  
  add: function () {
    var newItem = new ShortUrl.ShortenedUrlModel({ longUrl: this.longUrl.val() });
    if (newItem.isValid()) {
      newItem.save({}, {
        success: function(model) { ShortUrl.urlCollection.add(model); },
        error: function () { console.log("save failed"); }
      });
    }
  }
});
