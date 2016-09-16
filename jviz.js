//Initialize the package
var pkg = {};

//Source js files
var src_js = [ './js/simple-list.js', './js/**/*.js' ];

//Source sass files
var src_scss = [ './scss/**.scss' ];

//Package name
pkg.name = 'simple-list';

//Package description
pkg.description = 'A module to build a simple list';

//Author
pkg.author = { id: 'jmjuanes', name: 'Josemi Juanes', email: 'josemijuanes@gmail.com' };

//Build directory
pkg.directory = './build';

//Repository
pkg.repository = 'https://github.com/jviz/module-simple-list';

//Dependencies
pkg.dependencies = { jviz: 'dev' };

//Build tasks
pkg.build = [ 'build:js', 'build:scss' ];

//Install tasks
pkg.install = [];

//Tasks
pkg.tasks =
{
  //Build js files
  'build:js': [  { name: 'src', args: src_js }, { name: 'concat', args: 'simple-list.js' }, { name: 'dest', args: './' } ],

  //Build sass files
  'build:scss': [ { name: 'src', args: src_scss }, { name: 'sass' }, { name: 'dest', args: './' } ]
};

//Exports
module.exports = pkg;