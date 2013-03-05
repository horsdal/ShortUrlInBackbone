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
  
  describe("when the text field text is set and the shorten button is clicked", function () {
    var server;
    
    beforeEach(function () {
      server = sinon.fakeServer.create();
      server.respondWith("GET", "/{whatever}", [200, {}, ""]);

      sut.$el.find('input').val('www.blahblahblah.com');
      sut.$el.find('button').trigger("click");
    });
    
    it("should attempt to save a new item to the server", function () {
      expect(server.requests.length).toEqual(1);
      expect(server.requests[0].method).toEqual("POST");
      expect(server.requests[0].url).toEqual((new ShortUrl.ShortenedUrlModel()).url());
    });
    
    it("should attempt to save an item with json content type", function () {
      expect(server.requests[0].requestHeaders["Content-Type"]).toContain("application/json");
    });

    it("should attempt to save an item with the long url from the input field", function () {
      expect(JSON.parse(server.requests[0].requestBody).longUrl).toBeDefined();
      expect(JSON.parse(server.requests[0].requestBody).longUrl).toEqual("www.blahblahblah.com");
    });

  });

  describe("when the text field text is not set and the shorten button is clicked", function () {
    var server;

    beforeEach(function () {
      server = sinon.fakeServer.create();
      server.respondWith("GET", "/{whatever}", [200, {}, ""]);

      sut.$el.find('button').trigger("click");
    });

    it("should not make any calls to the server", function () {
      expect(server.requests.length).toEqual(0);
    });
  });
});