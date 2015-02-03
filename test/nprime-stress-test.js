/*
 * Nprime stress test.
 */

exports.test  = function ( done, assertions ) {
    var log = console.log
        , fs = require( 'fs' )
        , exit = typeof done === 'function' ? done : function () {}
        , assert = assertions || require( 'assert' )
        , np = require( '../' )
        , fname = '100K-primes.txt'
        , data = fs.readFileSync( __dirname + '/' + fname )
        , primes = data.toString().split( '\n' )
        , plen = primes.length
        , i = 1
        // cast prime to number
        , p = + primes[ i ]
        , stime = -1
        , etime = -1
        ;

    log( '- check results for  #test, #next and #prev.' );
    log( '- loading test data from file: "%s"', fname );
    log( '- %d primes loaded.', plen );
    log( '- now running test, please wait..' );
    stime = Date.now();

    for ( ; i < plen - 1; p = + primes[ ++i ] ) {
        // should return always -1 for all primes
        assert.ok( ! ~ np.test( p ) );
        // check previous prime
        assert.equal( np.prev( p, true ), + primes[ i - 1 ] );
        // check next prime
        assert.equal( np.next( p, true ), + primes[ i + 1 ] );
    }

    etime = ( Date.now() - stime ) / 1000

    log( '- test ok, elapsed time is %d secs', etime.toFixed( 2 ) );

    exit();
};

// single test execution with node
if ( process.argv[ 1 ] === __filename  ) exports.test = exports.test();