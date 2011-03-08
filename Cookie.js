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
    var expires = arg_expires || new Date;

    if ('object' === typeof expires && Date === expires.constructor)
    {
      _expires = expires;

      return this;
    }

    throw new TypeError('expires expects a Date');
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
    return _name + "=" + _value + "; expires=" + _expires.toGMTString() + "; path=" + _path
  };

  _assertValidStringValue(arg_name, 'name');

  _name = arg_name;

  _setValue(arg_value);
  _setExpires(arg_expires);
  _setPath(arg_path);

  return { setValue:   _setValue
         , getValue:   _getValue
         , setExpires: _setExpires
         , setPath:    _setPath
         , toString:   _toString
         };
};