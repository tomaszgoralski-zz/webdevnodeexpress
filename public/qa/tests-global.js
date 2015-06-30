/* jshint -W097 */
/*global suite, test,assert, $, document, chai,require */
'use strict';
suite('Global Tests', function(){
    test('page has a valid title', function(){
        chai.assert(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== 'TODO');
    });
});

suite('Logo Tests', function(){
    test('logo is laded correctly', function(){
        chai.assert($('#logo').size() > 0);
    });
});