/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
       files: ['grunt.js', '../js/scripts.js', '../js/site.*']
    },
    concat: {
      dist: {
        src: ['../js/scripts.js', '../js/slideshow.js', '../js/faderslider.js', '../js/site.*'],
        dest: '../js/ajkim.min.js'
      }
    },
    min: {
      dist: {
        src: '<config:concat.dist.dest>',
        dest: '<config:concat.dist.dest>'
      }
    },
    cssmin: {
      dist: {
        src: '../css/main.css',
        dest: '../css/main.css'
      }
    },
    watch: {
      files: ['<config:lint.files>', '../sass/*.scss'],
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
    uglify: {},
    compass: {
      dist: {
        forcecompile: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'concat min compass cssmin');

  // Compass tasks
  grunt.loadNpmTasks('grunt-compass');

  // CSS tasks
  grunt.loadNpmTasks('grunt-css');
};
