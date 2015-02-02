/*
 * Nprime, a simple and fast naive module for testing/calculating primes on the fly.
 *
 * Copyright(c) 2015 Guglielmo Ferri <44gatti@gmail.com>
 * MIT Licensed
 */

exports.version = require( '../package' ).version;
exports.Nprime = ( function () {
    var log = console.log
        , abs = Math.abs
        , ceil = Math.ceil
        , sqrt = Math.sqrt
        , composite = function ( p ) {
            // check if number is composite
            var qx = ceil( sqrt( p ) )
                , i = 3
                ;
            // skip trivial numbers (1 is a false positive)
            if ( ! p ) return 0;
            if ( p < 4 ) return -1;
            if ( p === p + 1 )
                throw new Error( 'the number is out of range, max value is ~2^53' );
            if ( p % 2 === 0 ) return 2;
            // search for divisors
            for ( ; i <= qx; i += 2 ) if ( p % i === 0 ) return i;
            return -1;
        }
        , next = function ( n, strict ) {
            var k = strict ? n + 1 : n
                ;
            if ( k + 1 & 1 ) ++k; 
            return ~ composite( k ) ? next( k + 2 ) : k;
        }
        , prev = function ( n, strict ) {
            var k = strict ? n - 1 : n
                ;
            if ( k - 1 & 1 ) --k; 
            return ~ composite( k ) ? prev( k - 2 ) : k;
        }
        ;

    return {
        test : composite
        , next : next
        , prev : prev
    }
    ;

} )();