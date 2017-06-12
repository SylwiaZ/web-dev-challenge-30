'use strict';

module.exports = function (grunt) {
    /**
     * JIT
     */
    require('jit-grunt')(grunt);

    /**
     * Load combine media queries
     */
    grunt.loadNpmTasks('grunt-combine-media-queries');

    /**
     * Project config
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cmq: {
            dist: {
                files: {
                    'public/asset/css/style.css': 'public/asset/css/style.css'
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'})
                ]
            },
            dist: {
                src: 'public/asset/css/style.css'
            }
        },
        sass: {
            options: {
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'public/asset/css/style.css': 'src/scss/main.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass', 'postcss', 'cmq'],
                options: {
                    livereload: true,
                    spawn: false
                }
            }
        }
    });

    /**
     * Default task
     * Run `grunt` on the command line
     */
    grunt.task.registerTask('default', ['sass']);
};