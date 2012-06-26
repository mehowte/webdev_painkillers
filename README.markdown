# Web Development Painkillers

Example application from lightning talk which happened during [Amusing Workshops #1](https://www.facebook.com/events/349032585170198/)

See it [here](http://mehowte.github.com/webdev_painkillers/)

##How to install

Simply clone or download the repository from github.

## File structure

```
external_javascripts/            - here are all external libraries that we are using
  raphael.js                       - allows us to make the animated circle
  caviar-dreams.js                 - font used in the logo (raphael.js requires fonts to be converted in a special way)
  live.js                          - makes automatic reloading possible
src/                             - here are the files of our website
  refresh-browser-example.js       - here we create the animated logo
  refresh-browser-example.css      - here we define styles for the website
index.html                       - here we tie it all together
Guardfile                        - here we configure guard-livereload
MIT-LICENSE                      - legal stuff (every open source product needs a license)
README.markdown                  - you are here
```

## Live.js

First way of reloading files whenever their content changes is using [live.js](http://livejs.com/).

Its easy to use but can drain battery from your laptop quicker since it constantly polls for changes.

To check how it works just uncomment the line in public/refresh-browser-example.html

## livereload

This one is a bit harder to use since it requires running commandline application and browser extensions.

But it is using operating system notifications of file changes happening. Because of that it does not take so
much of resources than the previous solution.

To use it 

Install:

```
gem guard-livereload
```

from your command line.

Install livereload extension in your browser.

Run:

```
guard
```

Connect your extension by clicking button "LR" in your browser (it should turn green).

## Have fun

And try to find and solve simple tasks you'll find in various files.


## License

Copyright © 2012 Michal Taszycki

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

