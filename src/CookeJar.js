/**
 * CookieJar.js - An object oriented JavaScript cookie manager.
 *
 * (c) 2011 Marijn Huizendveld <marijn.huizendveld@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE file
 * that was distributed with this source code.
 */
var CookieJar = CookieJar || (function (arg_window, arg_undefined)
{
  "use strict";

  //= require "./private"

  //= require "./Cookie"

  //= require "./public"

  return { Cookie:  Cookie
         , read:    _read
         , write:   _write
         , erase:   _erase
         , VERSION: "<%= COOKIE_JAR_VERSION %>"
         };
}(this.window));
