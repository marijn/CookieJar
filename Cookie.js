function _assertValidStringValue (arg_value, arg_name)
{
  if (undefined === arg_value)
  {
    throw new Error(arg_name + " is undefined");
  }
  else if ('string' !== typeof arg_value)
  {
    throw new TypeError(arg_name + " is not a string value");
  }
};

var Cookie = function (arg_name, arg_value, arg_expires, arg_path)
{
  var _name
    , _value
    , _expires
    , _path;

  function _setValue (arg_value)
  {
    _assertValidStringValue(arg_value, 'value');

    _value = arg_value;

    return this;
  };

  function _getValue ()
  {
    return _value;
  };

  function _setExpires (arg_expires)
  {
    var expires = arg_expires || new Date; // TODO: the default expiry value is unsensible

    if ('object' === typeof expires && Date === expires.constructor)
    {
      _expires = expires;

      return this;
    }

    throw new TypeError('expires expects a Date');
  };

  function _getExpires ()
  {
    return _expires;
  };

  function _setPath (arg_path)
  {
    var path = arg_path || '/';

    _assertValidStringValue(path, 'path');

    if (0 !== path.indexOf('/'))
    {
      throw new Error("path shoud start with a forward slash");
    }

    _path = path;

    return this;
  };

  function _toString ()
  {
    return _name + "=" + _value + "; expires=" + _expires.toUTCString() + "; path=" + _path
  };

  _assertValidStringValue(arg_name, 'name');

  _name = arg_name;

  _setValue(arg_value);
  _setExpires(arg_expires);
  _setPath(arg_path);

  return { setValue:   _setValue
         , getValue:   _getValue
         , setExpires: _setExpires
         , getExpires: _getExpires
         , setPath:    _setPath
         , toString:   _toString
         };
};

var CookieJar = (function (arg_document)
{

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
  };

  function _write (arg_cookie)
  {
    arg_document.cookie = arg_cookie.toString();
  };

  function _erase (arg_name)
  {
    arg_document.cookie = new Cookie(arg_name, '_', new Date(1)).toString();
  };

  return { read:  _read
         , write: _write
         , erase: _erase
         };
})(window.document);