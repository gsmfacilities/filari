// Gruntfile.js
module.exports = function(grunt) {
    grunt.initConfig({
        // grunt sass
        sass: {
            dev: {
				options: {
					style: 'compressed', // nested, compact, compressed, expanded
                    sourcemap: 'none',
                    noCache: true,
					// defaultEncoding: 'utf-8'
				},
				files: [
					{
						'css/app.css': 'css/app.scss'
					}
				]
			}
        },

        // watch
        watch: {
			sass: {
				files: 'css/**/*.scss',
				tasks: ['sass']
			},
			html: {
	            files: '**/*.html'
	        },
            js: {
                files: 'js/**/*.js'
            },
            options: {
	            livereload: true,
            }
        },
        
        // connect
		connect: {
			server: {
				options: {
					port: 1986,
					open: true,
					livereload: true,
					hostname: 'localhost'
				}
			}
		}

    });


    // create tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // register tasks
    grunt.registerTask('serve', ['connect', 'watch']);

};
