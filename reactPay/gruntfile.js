
module.exports = function(grunt){
    grunt.initConfig({
        sass: {
            dist: {
                sourceMap: true,
                files: {
                    './bin/css/style.css': './scss/style.scss'
                }
            }
        }
      });
      grunt.loadNpmTasks('grunt-sass');
      
      grunt.registerTask('default', ['sass']);
}