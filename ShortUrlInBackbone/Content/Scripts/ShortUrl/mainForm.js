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
  
  sayHello : function() {
    this.options.urlColl.add({ shortUrl: "new", longUrl: this.longUrl.val() });
  }
});
