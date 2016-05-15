/// <binding />
module.exports = function(grunt) {
		'use strict';
    
    require('time-grunt')(grunt);

    var appInfo = grunt.file.readJSON('package.json');

	grunt.initConfig({
		pkg: appInfo,
		watch: {
		    app: {
				options: {
        			livereload: true
    			},
				files: ['app/*.js', 'app/**/*.js', 'app/**/**/*.js', 'app/**/**/*.html', 'app/**/*.scss'],
				tasks: ['browserify', 'sass', 'uglify']
			}
		},
		browserify: {
		  	dist: {
		  		options: {
		  			transform: [
		  				['babelify', {
		  					loose: 'all'		  				}]
		  			]
		  		},
		    	files: [{
                    'src': ['app/**/*.js'],
                    'dest': 'dist/js/<%= pkg.config.appName %>.js',
	            }]
		  	}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
				    'dist/css/<%= pkg.config.appName %>.min.css': 'app/sharedStyles/screen.scss'
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 9000,
					hostname: 'localhost',
					root:'.',
					livereload: true,
					open: true
				}
			}
		},
		uglify: {
		    options: {
		        mangle: false,
		        sourceMap: true,
		        sourceMapName: 'dist/js/<%= pkg.config.appName %>.js.map'
		    },
		    js: {
		        src: ['dist/js/<%= pkg.config.appName %>.js'],
		        dest: 'dist/js/<%= pkg.config.appName %>.min.js'
		    }
		}
	});

	// Libraries
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Tasks
	grunt.registerTask(appInfo.config.appName, ['connect', 'watch:app']);

};