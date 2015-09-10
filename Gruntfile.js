module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				// define a string to put between each file in the concatenated output
				separator: ';'
			},
			dist: {
				// the files to concatenate
				src: ['src/**/*.js'],
				// the location of the resulting JS file
				dest: 'src/dist/js/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			},
			// qunit: {
			//	files: ['test/**/*.html']
			// }, 
			jshint: {
				// define the files to lint
				files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
				// configure JSHint (documented at http://www.jshint.com/docs/)
				options: {
					// more options here if you want to override JSHint defaults
					globals: {
						jQuery: true,
						console: true,
						module: true
					}
				}
			},
			watch: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint', 'qunit']
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	// grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	//Grunt test (add qunit after setting up tests)
	grunt.registerTask('test', ['jshint']);
	
	// Grunt (add qunit after setting up tests)
	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};