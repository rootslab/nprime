### Nprime

[![NPM VERSION](http://img.shields.io/npm/v/nprime.svg?style=flat)](https://www.npmjs.org/package/nprime)
[![CODACY BADGE](https://img.shields.io/codacy/b18ed7d95b0a4707a0ff7b88b30d3def.svg?style=flat)](https://www.codacy.com/public/44gatti/nprime)
[![CODECLIMATE](http://img.shields.io/codeclimate/github/rootslab/nprime.svg?style=flat)](https://codeclimate.com/github/rootslab/nprime)
[![CODECLIMATE-TEST-COVERAGE](https://img.shields.io/codeclimate/coverage/github/rootslab/nprime.svg?style=flat)](https://codeclimate.com/github/rootslab/nprime)
[![LICENSE](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/rootslab/nprime#mit-license)

[![TRAVIS CI BUILD](http://img.shields.io/travis/rootslab/nprime.svg?style=flat)](http://travis-ci.org/rootslab/nprime)
[![BUILD STATUS](http://img.shields.io/david/rootslab/nprime.svg?style=flat)](https://david-dm.org/rootslab/nprime)
[![DEVDEPENDENCY STATUS](http://img.shields.io/david/dev/rootslab/nprime.svg?style=flat)](https://david-dm.org/rootslab/nprime#info=devDependencies)
[![NPM DOWNLOADS](http://img.shields.io/npm/dm/nprime.svg?style=flat)](http://npm-stat.com/charts.html?package=nprime)

[![NPM GRAPH1](https://nodei.co/npm-dl/nprime.png)](https://nodei.co/npm/nprime/)

[![NPM GRAPH2](https://nodei.co/npm/nprime.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nprime/)

[![status](https://sourcegraph.com/api/repos/github.com/rootslab/nprime/.badges/status.png)](https://sourcegraph.com/github.com/rootslab/nprime)
[![views](https://sourcegraph.com/api/repos/github.com/rootslab/nprime/.counters/views.png)](https://sourcegraph.com/github.com/rootslab/nprime)
[![views 24h](https://sourcegraph.com/api/repos/github.com/rootslab/nprime/.counters/views-24h.png)](https://sourcegraph.com/github.com/rootslab/nprime)

> __Nprime__, a simple and fast __naive__ module for testing/calculating primes on the fly.

###Install

```bash
$ npm install nprime [-g]
```

> __require__:

```javascript
var Nprime  = require( 'nprime' );
```
###Run Tests

> __to run all test files, install devDependecies:__

```bash
 $ cd nprime/
 # install or update devDependecies
 $ npm install --dev
 # run tests
 $ npm test
```
> __to execute a single test file simply do__:

```bash
 $ node test/file-name.js
```

###Methods

> Arguments within [ ] are optional.

```javascript
/*
 * Check if the number is composite.
 * It returns the value of first divisor,
 * or -1 if number is a prime.
 */
Nprime#test : function () : Number

/*
 * Get the next prime, use strict to specify > or >=,
 */
Nprime#next : function ( Number n [, Boolean strict ] ) : Number

/*
 * Get the previous prime, use strict to specify < or <=,
 */
Nprime#prev : function ( Number n [, Boolean strict ] ) : Number
```

### MIT License

> Copyright (c) 2015 &lt; Guglielmo Ferri : 44gatti@gmail.com &gt;

> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:

> __The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.__

> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![GA](https://ga-beacon.appspot.com/UA-53998692-1/nprime/Readme?pixel)](https://github.com/igrigorik/ga-beacon)