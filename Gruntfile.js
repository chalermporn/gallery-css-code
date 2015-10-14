module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: ['sass/*.scss', 'index.html'],
      tasks: 'sass:dev'
    },
    sass: {
      dev: {
        files: {
          'css/gallery.css': 'sass/gallery.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', 'sass:dev');
}