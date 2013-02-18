ShortUrl.MainFormView = Backbone.View.extend({
  render : function() {
    $(this.el).html("<div class=\"input-append\"><input type=\"text\" value=\"Long URL\" class=\"span2\" /><button class=\"btn\">Shorten!</button> </div>");
    return this;
  },
  events: {
    "click button" : "sayHello"
  },
  sayHello : function() {
    alert("hej");
  }
});
