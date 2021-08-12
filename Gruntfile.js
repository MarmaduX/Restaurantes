module.exports = function(grunt){
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });
    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css',
                }]
            }
        },
        watch:{
            filse:['css/*.scss'],
            tasks:['css']
        },
        browserSync: {
            dev:{
                bsFiles:{ //browser files
                    src:[
                        'css/*css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options:{
                    watchTask: true,
                    server: {
                        baseDir:'./' //Directorio Base para nuestro servidor
                    }
                }
            }
        },
        imagemin:{
            dynamic:{
                filse:[{
                    expand: true,
                    cwd: './',
                    src: 'images/*.{png, gif, jpg, jpeg}',
                    dest: 'dist/'
                }]
            }
        },
        copy:{
            html:{
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    dest: 'dist'
                }]
            },
            fonts:{
                filse: [
                {
                    expand:true,
                    dot: true,
                    cwd: 'node_modules/open-iconic/font',
                    src: ['font/*.*'],
                    dest: 'dist'
                }]
            }
        },
        clean: {
            build:{
                src: ['dist/']
            }
        },
        cssmin:{
            dist:{}
        },
        uglify:{
            dist:{}
        },
        filerev:{
            options:{
                encoding:'utf8',
                algorithm:'md5',
                lenght: 20
            },
            release:{
                files:[{
                    src: [
                        'dist/js/*.js',
                        '/dist/css/*.css',  
                    ]                 
                }]
            }
        },
        concat:{
            options:{
                separator:';'
            },
            dist:{}
        },
        useminPrepare:{
            foo:{
                dest: 'dist',
                src:['index.html', ' about.html', 'lugares.html', 'maps.html', 'platos.html']
            },
            options:{
                flow:{
                    steps:{
                        css:['cssmin'],
                        js:['uglify']
                    },
                    post:{
                        css: [{
                            name: 'cssmin',
                            createConfig: function(context, block) {
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0,
                                    rebase: false
                                }
                            }
                        }]
                    }
                }
            }
        },
        usemin:{
            html: ['dist/idex.html', 'dist/about.html', 'dist/lugares.html', 'dist/maps.html', 'dist/platos.html'],
            options:{
                assetsDir: ['dist', 'dist/css', 'dist/js']
            }
        }
    });

    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('img:compress', ['imagemin']);
    grunt.registerTask('build', [
        'clean',
        'copy',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin'
    ]);
};