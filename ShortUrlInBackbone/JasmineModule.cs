namespace ShortUrlInBackbone
{
  using Nancy;

  public class JasmineModule : NancyModule
  {
    public JasmineModule()
    {
      Get["/testrunner"] = _ => View["SpecRunner"];
    }
  }
}