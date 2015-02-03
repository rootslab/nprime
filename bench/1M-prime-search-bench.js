var log = console.log
    , np = require( '../' )
    , i = 3
    // cast prime to number
    , max = 16 * 1024 * 1024 + 1
    , stime = -1
    , etime = -1
    , cnt = 0
    ;

log( ' - number range is [%d, %d] (%d values)', i, max, max - i );

log( ' - running bench, please wait..' );

stime = Date.now();

for ( ; i <= max; i += 2 ) np.test( i ) === -1 ? ++cnt : 0;

etime = ( Date.now() - stime ) / 1000

log( ' - %d primes found', cnt );

log( ' - elapsed time is %d secs', etime.toFixed( 2 ) );

log( ' - %d primes/sec', ( cnt / etime ).toFixed( 2 ) );
