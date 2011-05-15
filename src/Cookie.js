function Cookie (arg_name, arg_value, arg_expires, arg_path)
{
  var _name
    , _value
    , _expires
    , _path;

  function _getName ()
  {
    return _name;
  }

  function _setValue (arg_value)
  {
    _assertValidStringValue(arg_value, 'value');

    _value = arg_value;

    return this;
  }

  function _getValue ()
  {
    return _value;
  }

  function _setExpires (arg_expires)
  {
    var expires = arg_expires || _makeDefaultDate(new Date());

    if ('object' === typeof expires && Date === expires.constructor)
    {
      _expires = expires;

      return this;
    }

    throw new TypeError('expires expects a Date');
  }

  function _getExpires ()
  {
    return _expires;
  }

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
  }

  function _toString ()
  {
    return _name + "=" + _value + "; expires=" + _expires.toUTCString() + "; path=" + _path;
  }

  _assertValidStringValue(arg_name, 'name');

  _name = arg_name;

  _setValue(arg_value);
  _setExpires(arg_expires);
  _setPath(arg_path);

  return { getName:    _getName
         , setValue:   _setValue
         , getValue:   _getValue
         , setExpires: _setExpires
         , getExpires: _getExpires
         , setPath:    _setPath
         , toString:   _toString
         };
}
