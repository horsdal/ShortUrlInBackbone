﻿ShortUrl.MainFormView = Backbone.View.extend({
  render : function() {
    $(this.el).html("<form><input type=\"text\" /><input type=\"submit\"/> </form>");
  }
});