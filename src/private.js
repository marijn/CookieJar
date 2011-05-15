function _assertValidStringValue (arg_value, arg_name)
{
  if (arg_undefined === arg_value)
  {
    throw new Error(arg_name + " is undefined");
  }
  else if ('string' !== typeof arg_value)
  {
    throw new TypeError(arg_name + " is not a string value");
  }
}

function _makeDefaultDate (arg_date)
{
  arg_date.setTime(arg_date.getTime() + 86400000);

  return arg_date;
}
