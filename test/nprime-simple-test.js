/*
 * Nprime simple test.
 */

exports.test  = function ( done, assertions ) {
    var log = console.log
        , pow = Math.pow
        , exit = typeof done === 'function' ? done : function () {}
        , assert = assertions || require( 'assert' )
        , np = require( '../' )
        ;

    log( '- check a value > 2^53, it should throw an Error' );
    assert.throws( function () {
        np.test( pow( 2, 53 ) + 1 );
    } );

    log( '- check %d, it should return %d', 0, 0 );
    assert.ok( ~ np.test( 0 ) );


    log( '- check %d, it should return -1 (false positive)', 1 );
    assert.ok( ! ~ np.test( 1 ) );

    log( '- check %d, it should return -1', 2 );
    assert.ok( ! ~ np.test( 2 ) );

    log( '- check even number %d, it should return 2', 64 * 1024 * 1024 );
    assert.ok( np.test( 64 * 1024 * 1024 ), 2 );

    log( '- check negative number %d, it should return -1', -17 );
    assert.ok( ! ~ np.test( -17 ) );

    exit();
};

// single test execution with node
if ( process.argv[ 1 ] === __filename  ) exports.test = exports.test();