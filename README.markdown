Managing cookies in JavaScript
==============================
This is a simple toolkit for managing cookies on the client side. It is by no
means finished and warn you that I mostly pushed the code to github to ensure
that it would not get lost on my hard drive.

Building from source
====================
`CookieJar` utilizes [Sprockets][1] as a dependency manager. You can build the
tookit by running the following command:

```sh
$ sprocketize -I src src/*.js > build/CookieJar.js
```

Test suite
==========
There is a *very small* test suite available (though I'm hoping to expand it)
which you can test for yourself. This will require you to build the toolkit from
source and to fetch [`jasmine`][2].

```sh
$ git submodule update --init
```

Now you can open the file `tests/SpecRunner.html` in your browser.

License
=======
The code is released under the [MIT License][3]

[1]: http://getsprockets.org
[2]: http://pivotal.github.com/jasmine
[3]: https://github.com/marijn/CookieJar/blob/develop/meta/LICENSE