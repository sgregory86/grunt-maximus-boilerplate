(function() {
    'use strict';

    module.exports = {
        beforeconcat: [
            'src/js/*.js',
            '!src/js/main.js',
            '!src/js/main.min.js'
        ],
        afterconcat: 'src/js/main.js'
    };
})();