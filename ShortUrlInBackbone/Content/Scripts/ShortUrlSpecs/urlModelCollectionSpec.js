describe("ShortenedUrlsCollection", function () {
  var sut;

  beforeEach(function () {
    sut = new ShortUrl.ShortenedUrlsCollection();
  });

  describe("when instantiated", function () {
    it("should be empty", function () {
      expect(sut.length).toEqual(0);
    });
  });
  
  describe("when items are added", function () {

    beforeEach(function () {
      sut.add(new ShortUrl.ShortenedUrlModel({ longUrl: "b" }));
      sut.add(new ShortUrl.ShortenedUrlModel({ longUrl: "a" }));
      sut.add(new ShortUrl.ShortenedUrlModel({ longUrl: "c" }));
    });

    it("it should contain the objects", function () {
      expect(sut.length).toEqual(3);
    });

    it("it should be ordered alphabetically by long url", function () {
      expect(sut.at(0).get("longUrl")).toEqual("a");
      expect(sut.at(1).get("longUrl")).toEqual("b");
      expect(sut.at(2).get("longUrl")).toEqual("c");
    });
  });

  describe("when made to fetch", function () {
    it("should not be empty anymore", function () {

    });
    
    it("it should be ordered alphabetically by long url", function () {

    });
  });
});