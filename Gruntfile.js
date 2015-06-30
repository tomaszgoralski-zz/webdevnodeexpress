/* jshint -W097 */
/*global module, console,__dirname, process ,chai*/
'use strict';
module.exports = function (grunt) {
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
        'grunt-nodemon'
    ].forEach(function (task) {
            grunt.loadNpmTasks(task);
        });
    // configure plugins
    grunt.initConfig({
        nodemon: {
            dev: {
                script: 'app.js'
            }
        },
        cafemocha: {
            all: {src: 'public/qa/tests-*.js', options: {ui: 'tdd'}}
        },
        jshint: {
            app: ['app.js', 'public/js/**/*.js',
                'lib/**/*.js'],
            qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
        },
        exec: {
            linkchecker: {cmd: 'linkchecker http://localhost:3000'}
        },
    });
    // register tasks
    grunt.registerTask('default', ['nodemon']);
    grunt.registerTask('test', ['cafemocha', 'jshint', 'exec']);
};
