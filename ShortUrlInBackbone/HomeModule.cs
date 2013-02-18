namespace ShortUrlInBackbone
{
  using Nancy;

  public class HomeModule : NancyModule
  {
    public HomeModule()
    {
      Get["/"] = _ => View["Index"];
    }
  }
}