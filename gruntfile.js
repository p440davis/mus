module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'style.css' : 'sass/style.scss',
                }
            }
        },
        watch: {
            files: '**/*.scss',
            tasks: 'sass',
            options: {
                debounceDelay: 250,
                interrupt: true,
                spawn: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'sass',
        'watch'
    ]);
};
