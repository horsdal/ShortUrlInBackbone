describe("The main form", function () {
  var sut;

  beforeEach(function () {
    sut = new ShortUrl.MainFormView();
  });

  describe("when created", function () {
    it("should create a text input field", function () {
      var inputField = sut.$el.find('input');
      expect(inputField).toBeDefined();
      expect(inputField.attr("type")).toEqual("text");
    });
    
    it("the text input field should contain a placeholder text", function () {
      var inputField = sut.$el.find('input');
      expect(inputField.attr("placeholder")).toEqual("Long URL");
    });

    it("the text input field should span5", function () {
      var inputField = sut.$el.find('input');
      expect(inputField.hasClass("span5")).toBeTruthy();
    });

    it("should create a button", function () {
      var button = sut.$el.find('button');
      expect(button).toBeDefined();
    });

    it("the button should be called 'Shorten!'", function () {
      var button = sut.$el.find('button');
      expect(button.text()).toEqual("Shorten!");
    });
  });
});