var log = console.log
    , np = require( '../' )
    , i = 64 * 1024 - 1
    , max = i + 16
    // pick a prime for test
    , aprime = 65543
    ;

log( '- check some numbers between [%d, %d]', i, max );

for ( ; i <= max; i += 2 ) {
    log( '  > %d: %s', i, ~ np.test( i ) ? 'composite' : 'prime' );
}

log();
log( '- prime >= %d is %d', aprime, np.next( aprime ) );
log( '- prime >  %d is %d', aprime, np.next( aprime, true ) );
log();

log();
log( '- prime <= %d is %d', aprime, np.prev( aprime ) );
log( '- prime <  %d is %d', aprime, np.prev( aprime, true ) );
log();