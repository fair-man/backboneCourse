module.exports = function (grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      copy: {
          main: {
              files: [
                  {
                      expand: true,
                      cwd: 'app/bower_components/bootstrap/less/',
                      src: ['**'],
                      dest: 'app/styles/vendor/bootstrap'
                  },
                  {
                      expand: true,
                      cwd: 'app/bower_components/bootstrap/fonts/',
                      src: ['**'],
                      dest: 'app/fonts'
                  }
              ]
          },
          dist: {
              files: [
                  {
                      expand: true,
                      cwd: 'app',
                      src: ['**'],
                      dest: 'dist'
                  }
              ]
          }
      },
      mkdir: {
          all: {
              options: {
                  create: [
                      'app/fonts',
                      'app/images',
                      'app/scripts',
                      'app/styles',
                      'app/json-config'
                  ]
              }
          }
      },
      less: {
          development: {
              options: {
                  paths: ['app/styles']
              },
              files: {
                  'app/styles/css/main.css': 'app/styles/less/main.less'
              }
          }
      },
      connect: {
          server: {
              options: {
                  port: 3000,
                  base: 'app',
                  open: true
              }
          }
      },
      watch : {
          livereload: {
              options: {
                  livereload: true
              },
              files: ['app/**/*']
          },
          less: {
              files : ['app/styles/**/*.less'],
              tasks : ['less_compile']
          }
      }
  });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('less_compile', ['less:development']);

    grunt.registerTask('default', ['mkdir', 'copy:main']);
    grunt.registerTask('dev', ['less:development', 'copy:dist', 'connect', 'watch']);
};