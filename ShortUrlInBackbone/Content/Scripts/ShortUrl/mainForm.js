ShortUrl.MainFormView = Backbone.View.extend({
  render: function () {
    var template = $("#mainFormTemplate").html();
    $(this.el).html(template);
    return this;
  },
  events: {
    "click button" : "sayHello"
  },
  sayHello : function() {
    alert("hej");
  }
});
