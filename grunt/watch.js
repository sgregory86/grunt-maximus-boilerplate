module.exports = {
    html: {
        files: ['index.html'],
        tasks: ['htmlhint']
    },
    jshint: {
        files: ['src/js/*.js'],
        tasks: ['jshint:beforeconcat', 'concat:target', 'jshint:afterconcat', 'uglify:dist']
    },
    less: {
        files: ['src/css/less/*.less'],
        tasks: ['less:transpile', 'cssmin:minify']
    }
};