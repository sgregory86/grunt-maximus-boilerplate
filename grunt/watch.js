(function() {
    'use strict';

    module.exports = {
        html: {
            files: 'src/index.html',
            tasks: 'htmlhint'
        },
        jshint: {
            files: [
                'src/js/*.js',
                '!src/js/main.js',
                '!src/js/main.min.js'
            ],
            tasks: [
                'jshint:beforeconcat',
                'concat:target',
                'jshint:afterconcat',
                'uglify:dist'
            ]
        },
        less: {
            files: 'src/css/*.less',
            tasks: [
                'less:transpile',
                'cssmin:minify'
            ]
        }
    };
})();