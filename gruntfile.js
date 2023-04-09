module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        srcPath: 'src/',
        buildPath: 'project_core/static/project_core/',

        concat: {
            dist: {
                src: [
                    '<%= srcPath %>js/jquery.min.js',
                    '<%= srcPath %>js/jquery.ajax-order.js',
                    '<%= srcPath %>js/jquery.ajax-review.js',
                    '<%= srcPath %>js/request.js',
                    '<%= srcPath %>js/review.js',
                    '<%= srcPath %>js/configurator.js',
                    /**************************************/
                    '<%= srcPath %>js/bootstrap.min.js',
                    '<%= srcPath %>js/bootstrap-select.js',
                    '<%= srcPath %>js/jquery.themepunch.tools.min.js',
                    '<%= srcPath %>js/jquery.themepunch.revolution.min.js',
                    '<%= srcPath %>js/revolution.extension.actions.min.js',
                    '<%= srcPath %>js/revolution.extension.carousel.min.js',
                    '<%= srcPath %>js/revolution.extension.kenburn.min.js',
                    '<%= srcPath %>js/revolution.extension.layeranimation.min.js',
                    '<%= srcPath %>js/revolution.extension.migration.min.js',
                    '<%= srcPath %>js/revolution.extension.navigation.min.js',
                    '<%= srcPath %>js/revolution.extension.parallax.min.js',
                    '<%= srcPath %>js/revolution.extension.slideanims.min.js',
                    '<%= srcPath %>js/revolution.extension.video.min.js',
                    '<%= srcPath %>js/jquery.validate.min.js',
                    '<%= srcPath %>js/owl.carousel.min.js',
                    '<%= srcPath %>js/nouislider.js',
                    '<%= srcPath %>js/jquery.bootstrap-touchspin.js',
                    '<%= srcPath %>js/isotope.js',
                    '<%= srcPath %>js/masterslider.js',
                    '<%= srcPath %>js/jquery.bxslider.js',
                    '<%= srcPath %>js/jquery.magnific-popup.js',
                    '<%= srcPath %>js/waypoints.min.js',
                    '<%= srcPath %>js/jquery.counterup.min.js',
                    '<%= srcPath %>js/wow.min.js',
                    '<%= srcPath %>js/custom.js',
                ],
                dest: '<%= buildPath %>js/bundle.js',
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= buildPath %>js/scripts.js': [
                        '<%= buildPath %>js/bundle.js',
                    ]
                }
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: false,
                    compress: false,
                    yuicompress: false,
                    style: 'expanded',
                },
                files: {
                    '<%= srcPath %>css/bundle.css': '<%= srcPath %>sass/style.scss'
                }
            },
        },
        concat_css: {
            dist: {
                src: [
                    '<%= srcPath %>css/bootstrap.css',
                    '<%= srcPath %>css/font-awesome.css',
                    '<%= srcPath %>css/bootstrap-select.css',
                    '<%= srcPath %>css/settings.css',
                    '<%= srcPath %>css/navigation.css',
                    '<%= srcPath %>css/fn-icon.css',
                    '<%= srcPath %>css/owl.carousel.css',
                    '<%= srcPath %>css/owl.theme.default.min.css',
                    '<%= srcPath %>css/nouislider.pips.css',
                    '<%= srcPath %>css/nouislider.css',
                    '<%= srcPath %>css/jquery.bootstrap-touchspin.css',
                    '<%= srcPath %>css/masterslider.css',
                    '<%= srcPath %>css/masterslider-skin.css',
                    '<%= srcPath %>css/ms-staff-style.css',
                    '<%= srcPath %>css/jquery.bxslider.css',
                    '<%= srcPath %>css/magnific-popup.css',
                    '<%= srcPath %>css/animate.min.css',
                    '<%= srcPath %>css/bundle.css',
                    '<%= srcPath %>css/layers.css',
                    '<%= srcPath %>css/responsive.css',
                ],
                dest: '<%= buildPath %>css/s.css',
            }
        },
        cssmin: {
            options: {
                rebase: true,
                relativeTo: './'
            },
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= buildPath %>css/',
                    src: ['s.css'],
                    dest: '<%= buildPath %>css/',
                    ext: 'tyles.css'
                }]
            }
        },
        clean: {
            's.css': ['<%= buildPath %>css/s.css'],
            'bundle.js': ['<%= buildPath %>js/bundle.js']
        }
    });

    // Load plugins here.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-css-import');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Register tasks here.
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'concat_css', 'cssmin', 'clean']);
};
