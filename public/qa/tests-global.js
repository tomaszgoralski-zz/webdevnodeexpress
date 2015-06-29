suite('Global Tests', function(){
    test('page has a valid title', function(){
        assert(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== 'TODO');
    });
});

suite('Logo Tests', function(){
    test('logo is laded correctly', function(){
        assert($('#logo').size() > 0);
    });
});