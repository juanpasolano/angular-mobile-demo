module.exports =  function(grunt){

	grunt.initConfig({

		watch:{
			js_app: {
				files: ['www/js/app/**/*.js','www/js/app/*.js'],
				tasks: ['uglify:js_app', 'concat:js_app', 'notify:js']
			},
			less:{
				files:['www/css/less/*.less'],
				tasks:['less', 'notify:less']
			},
			sass:{
				files:['www/css/sass/*.scss'],
				tasks:['sass', 'notify:sass']
			}
		},

		concat: {
			js_app: {
				src: ['www/js/app/**/*.js','www/js/app/*.js'],
				dest: 'www/js/dist/built.js'
			},
			js_libs:{
				files:{
					'www/js/dist/libs.min.js':['']
				}
			}
		},

		uglify:{
			js_app: {
				files: {
					'www/js/dist/built.min.js': ['www/js/app/**/*.js','www/js/app/*.js']
				}
			}
		},

		less:{
			dist:{
				options: {
					paths: ["www/css", "www/css/less"]
				},
				files: {
					'www/css/base.css': 'www/css/less/base.less'
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded', //nested, compact, compressed, expanded.
					sourcemap : true
				},
				files: {
					'www/css/base.css': 'www/css/sass/base.scss'
				}
			}
		},

		copy: {
			phonegap: {
				files: [
				{expand: true, src: ['www/**'], dest: '../app-angular-pg/platforms/ios/'},
				{expand: true, src: ['www/**'], dest: '../app-angular-pg/platforms/android/assets/'},
				]
			}
		},

		notify:{
			js:{
				options:{
					message: 'JS files concat and minify'
				}
			},
			less:{
				options:{
					message: 'LESS files compiled'
				}
			},
			sass:{
				options:{
					message: 'SASS files compiled'
				}
			},
			copypg:{
				options:{
					title: 'grunt copy-pg',
					message: 'Files copied to phonegap folders'
				}
			}
		}

	});


grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-notify');


grunt.registerTask('default', ['watch']);
grunt.registerTask('watch-js', ['watch:js_app']);
grunt.registerTask('watch-less', ['watch:less']);
grunt.registerTask('watch-sass', ['watch:sass']);
grunt.registerTask('concat-app', ['concat:js_app']);
grunt.registerTask('uglify-app', ['uglify:js_app']);
grunt.registerTask('uglify-libs', ['uglify:js_libs']);
grunt.registerTask('copy-pg', ['copy:phonegap', 'notify:copypg']);

};