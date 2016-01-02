(function() {
    'use strict';

    module.exports = function(grunt) {
        grunt.registerTask('build', [
            'less:transpile',
            'cssmin:minify',
            'jshint:beforeconcat',
            'concat:target',
            'jshint:afterconcat',
            'uglify:dist'
        ]);
    };
})();