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

License
=======
The code is released under the [MIT License][2]

[2]: ./meta/LICENSE