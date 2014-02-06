module.exports =  function(grunt){

	grunt.initConfig({

		watch:{
			js_app: {
				files: ['www/js/app/**/*.js','www/js/app/*.js'],
				tasks: ['uglify:js_app', 'concat:js_app']
			},
			less:{
				files:['www/css/base.less'],
				tasks:['less']
			}
		},

		concat: {
			js_app: {
				src: ['www/js/app/**/*.js','www/js/app/*.js'],
				dest: 'www/js/dist/built.js'
			}
		},

		uglify:{
			js_app: {
				files: {
					'www/js/dist/built.min.js': ['www/js/app/**/*.js','www/js/app/*.js']
				}
			},
			js_libs:{
				files:{
					'www/js/dist/libs.min.js':[
					''
					]
				}
			}
		},

		less:{
			options: {
				paths: ['www/css']
			},
			src: {
				expand: true,
				cwd:    "www/css",
				src:    "base.less",
				dest:		"www/css",
				ext:    ".css"
			}
		},

		copy: {
			phonegap: {
				files: [
					{expand: true, src: ['www/**'], dest: '../app-angular-pg/platforms/ios/'},
				]
			}
		}

	});


grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-copy');


grunt.registerTask('default', ['watch']);
grunt.registerTask('watch-js', ['watch:js_app']);
grunt.registerTask('watch-less', ['watch:less']);
grunt.registerTask('concat-app', ['concat:js_app']);
grunt.registerTask('uglify-app', ['uglify:js_app']);
grunt.registerTask('uglify-libs', ['uglify:js_libs']);
grunt.registerTask('copy-pg', ['copy:phonegap']);

};