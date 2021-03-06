module.exports = function (grunt) {
  grunt.initConfig({ 
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: 'index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin: {
      'dist/rectangle.css': 'rectangle.css'
    },
    uglify: {
      release:{
        files: {
          'dist/register.js': 'rectangle.js',
        }
      }
    }
 
});

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('release', ['uglify', 'cssmin', 'htmlmin']);
};
