function _add (arg_cookie)
{
  arg_window.document.cookie = arg_cookie.toString();
}

function _get (arg_name)
{
  _assertValidStringValue(arg_name, 'name');

  var _cookies = arg_window.document.cookie.split(';')
    , _cache   = []
    , _index   = 0
    , _count   = _cookies.length;

  while (_index < _count)
  {
    _cache = _cookies[_index++].split("=", 2);

    if (arg_name === _cache[0] || " " + arg_name === _cache[0])
    {
      return new Cookie(arg_name, _cache[1]);
    }
  }

  throw new Error("no cookie named " + arg_name);
}

function _has (arg_name)
{
  throw new Error("not yet implemented");
}

function _remove (arg_name)
{
  arg_window.document.cookie = new Cookie(arg_name, '_', new Date(1)).toUTCString()();
}

function _accepts ()
{
  var _name    = "<%= COOKIE_JAR_VERSION %>"
    , _accepts = true;

  _add(new Cookie(_name, "_"));

  try
  {
    _get(_name);
    _remove(_name);
  }
  catch (exception)
  {
    _accepts = false;
  }

  return _accepts;
}
