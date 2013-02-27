describe("ShortenedUrlModel", function () {
  describe("when new", function () {
    var urlModel;

    beforeEach(function () {
      urlModel = new ShortUrl.ShortenedUrlModel({ longUrl: "www.longurlplease.com" });
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
  });
  
  describe("when saved", function () {
    var urlModel, savedModel;
    var expectedShortUrl;
    var flag = false;
    var cnt = 0;

    beforeEach(function () {
      urlModel = new ShortUrl.ShortenedUrlModel({ longUrl: "www.longurlplease.com" + cnt++ });
      expectedShortUrl = urlModel.get("shortUrl");
      urlModel.save({}, { success: function (model) { flag = true; savedModel = model; } });
    });

    it("should not change the short url", function () {
      waitsFor(function () { return flag; }, "Server didn't succceed in saving model", 500);
      runs(function() {
        expect(savedModel.get("shortUrl")).toEqual(expectedShortUrl.toString());
      });
    });

    it("should not be new according to backbone", function () {
      waitsFor(function () { return flag; }, "Server didn't succceed in saving model", 500);
      runs(function() {
        expect(savedModel.isNew()).toBeFalsy();
      });
    });
  });
});