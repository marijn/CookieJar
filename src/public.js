function _read (arg_name)
{
  _assertValidStringValue(arg_name, 'name');

  var _cookies = arg_document.cookie.split(';')
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

function _write (arg_cookie)
{
  arg_document.cookie = arg_cookie.toString();
}

function _erase (arg_name)
{
  arg_document.cookie = new Cookie(arg_name, '_', new Date(1)).toString();
}
