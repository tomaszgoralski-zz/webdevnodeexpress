module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-nodemon');
    nodemon: {
        dev: {
            script: 'app.js'
        }
    }
};
