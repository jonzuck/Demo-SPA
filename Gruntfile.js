module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				// define a string to put between each file in the concatenated output
				separator: '\n'
			},
			dist: {
				// the files to concatenate
				src: ['src/assets/js/*.js', 'src/components/jquery/dist/jquery.js', 'src/components/mui/dist/js/mui.js'],
				// the location of the resulting JS file
				dest: 'src/dist/js/<%= pkg.name %>.min.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				files: {
					'src/dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		jshint: {
			// define the files to lint
			src: ['Gruntfile.js', 'src/assets/js/*.js'],
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
		// qunit: {
		//	files: ['test/**/*.html']
		// }, 
		watch: {
			files: ['<%= jshint.src %>'],
			tasks: ['jshint', 'qunit']
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