describe("ShortenedUrlModel", function () {
  var exprectedLongUrl = "www.longurlplease.com";

  describe("when new", function () {
    var urlModel;

    beforeEach(function () {
      urlModel = new ShortUrl.ShortenedUrlModel({ longUrl: exprectedLongUrl });
    });

    it("should have a shortUrl attibute", function (parameters) {
      expect(urlModel.get("shortUrl")).toBeDefined();
    });
    
    it("should have a shortUrl attibute which is a positive number", function (parameters) {
      expect(urlModel.get("shortUrl")).toBeGreaterThan(0);
    });

    it("should be new according to backbone", function () {
      expect(urlModel.isNew()).toBeTruthy();
    });
    
    it("should have 'shortenedUrls' a its url", function () {
      expect(urlModel.url()).toEqual("/shortenedUrls/");
    });
  });
  
  describe("when saved", function () {
    var urlModel, savedModel;
    var expectedShortUrl;
    var flag = false;
    var cnt = 0;

    beforeEach(function () {
      flag = false;
      urlModel = new ShortUrl.ShortenedUrlModel({ longUrl: exprectedLongUrl + cnt++ });
      expectedShortUrl = urlModel.get("shortUrl");
      urlModel.save({}, { success: function (model) { flag = true; savedModel = model; } });
    });
    
    it("shouldbe accepted by the server", function (parameters) {
      waitsFor(function () { return flag; }, "Server didn't succceed in saving model", 500);
    });

    it("should not change the short url", function () {
      waitsFor(function () { return flag; }, "Server didn't succceed in saving model", 500);
      runs(function() {
        expect(savedModel.get("shortUrl")).toEqual(expectedShortUrl.toString());
      });
    });

    it("should not be new according to backbone", function () {
      waitsFor(function () { return flag; }, "Server didn't succceed in saving model", 500);
      runs(function () {
        expect(savedModel.isNew()).toBeFalsy();
      });
    });

    it("should have include the id in its url", function () {
      expect(savedModel.url()).toEqual("/shortenedUrls/" + savedModel.id);
    });

  });
  
  describe("when saving fails", function () {
    var urlModel, savedModel;
    var expectedShortUrl;    

    beforeEach(function () {
      urlModel = new ShortUrl.ShortenedUrlModel({ longUrl: exprectedLongUrl});
      expectedShortUrl = urlModel.get("shortUrl");

      var server = sinon.fakeServer.create();
      server.respondWith("GET", urlModel.url(), [404, {}, ""]);
      
      urlModel.save({}, { success: function (model) { savedModel = model; } });
    });
    
    it("should still be new", function () {
      expect(urlModel.isNew).toBeTruthy();
    });
    
    it("should not set the saved model", function () {
      expect(savedModel).toBeUndefined();
    });
    
    it("should not change the short url", function () {
      expect(urlModel.get("shortUrl").toString()).toEqual(expectedShortUrl.toString());
    });

    it("should not change the long url", function () {
      expect(urlModel.get("longUrl").toString()).toEqual(exprectedLongUrl.toString());
    });
  });
});