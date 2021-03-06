﻿namespace ShortUrlInBackbone
{
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using Nancy;
  using Nancy.ModelBinding;

  public class HomeModule : NancyModule
  {
    private class ShortenedUrl
    {
      public string shortUrl { get; set; }
      public string longUrl { get; set; }
      public int id { get; set; }
    }
    private static List<ShortenedUrl> shortenedUrls =  new List<ShortenedUrl>();

    public HomeModule()
    {
      Get["/"] = _ => View["Index"];
      Get["/shortenedUrls"] = _ => shortenedUrls;
      Get["/{shortUrlCode}"] = param =>
        {
          var destination = shortenedUrls.FirstOrDefault(url => url.shortUrl == param.shortUrlCode);
          if (destination == null)
            return HttpStatusCode.NotFound;
          if (Uri.IsWellFormedUriString(destination.longUrl, UriKind.Absolute))
            return Response.AsRedirect(destination.longUrl);

          return Response.AsRedirect("http://" + destination.longUrl);
        };

      Post["/shortenedUrls"] = _ =>
        {
          var item = this.Bind<ShortenedUrl>();
          item.id = shortenedUrls.Count();
          shortenedUrls.Add(item);
          return Negotiate.WithModel(item).WithStatusCode(HttpStatusCode.Created);
        };

      Delete["/shortenedUrls/{id}"] = param =>
        {
          shortenedUrls.RemoveAll(url => url.id == param.id);
          return HttpStatusCode.OK;
        };
    }
  }
}