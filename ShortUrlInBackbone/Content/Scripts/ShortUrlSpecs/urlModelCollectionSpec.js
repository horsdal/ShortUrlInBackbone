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

  var expectSortedByLongurl = function (coll) {
    var previousModel = null;
    coll.each(function (model) {
      if (previousModel != null) {
        if (model.get("longUrl") != previousModel.get("longUrl"))
          expect(model.get("longUrl")).toBeGreaterThan(previousModel.get("longUrl"));
      }
      previousModel = model;
    });
  };

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
      expectSortedByLongurl(sut);
    });
  });

  describe("when made to fetch", function () {
    var flag;

    beforeEach(function () {
      flag = false;
      runs(function () {
        sut.fetch({ success: function () { flag = true; } });
      });
    });

    it("should not be empty anymore", function () {
      waitsFor(function () { return flag; }, 500);
      runs(function () {
        expect(sut.length).toBeGreaterThan(0);
      });
    });

    it("it should be ordered alphabetically by long url", function () {
      waitsFor(function () { return flag; }, 500);
      runs(function () {
        expectSortedByLongurl(sut);
      });
    });
  });
});