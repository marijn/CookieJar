describe("CookieJar", function() {

  var name   = "name"
    , cookie = new CookieJar.Cookie(name, "value");

  // we want to ensure that the cookie is not set in a previous run of the test suite
  window.document.cookie = name + "=_; expires=" + new Date(1).toUTCString();

  it("should be able to add a cookie", function() {
    window.CookieJar.add(cookie);

    expect(window.document.cookie).toEqual(cookie.getName() + '=' + cookie.getValue());
  });

  it("should get a cookie", function() {
    expect(window.CookieJar.get(name).toString()).toEqual(cookie.toString());
  });

  it("should delete a cookie", function() {
    window.CookieJar.remove(name);

    try
    {
      window.CookieJar.get(name)
    }
    catch (execption)
    {
      expect(execption.message).toEqual("no cookie named " + name);
    }
  });

});