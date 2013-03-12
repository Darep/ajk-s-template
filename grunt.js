/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
       files: ['grunt.js', 'js/src/**/*.js']
    },
    concat: {
      dist: {
        src: ['js/src/**/*.js'],
        dest: 'js/app.js'
      }
    },
    min: {
      dist: {
        src: '<config:concat.dist.dest>',
        dest: 'js/app.min.js'
      }
    },
    watch: {
      files: ['<config:lint.files>'],
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        jquery: true,
        devel: true,
        browser: true
      },
      globals: {}
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'concat min');
};
