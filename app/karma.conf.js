module.exports = function(config){
  config.set({

    basePath : './',

    preprocessors: {
      //'test/**/*.js': [ 'browserify' ] //Mention path as per your test js folder
    },

    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/chai/chai.js',
      //'node_modules/expect/umd/expect.js',
      'node_modules/angular-mocks/angular-mocks.js',


      //'components/**/*.js',
      'filter/**/*.js',
      'view/form/**/*.js',
      'script/**/*.js',
      'service/**/*.js',
      'test/**/*.js',
      'test-lib/**/*.js',
      'view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['mocha'],

    browsers : ['Chrome','Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-mocha',
            'karma-junit-reporter',
            //'karma-browserify'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
