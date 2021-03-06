module.exports = function(config) {

  var appBase    = 'dist/';       // transpiled app JS and map files
  var appSrcBase ='src/';
  //var appSrcBase = appBase;      // app source TS files
  var appAssets  = '/base/src/';

  // Testing helpers (optional) are conventionally in a folder called `testing`
  var testingBase    = 'testing/'; // transpiled test JS and map files
  var testingSrcBase = 'testing/'; // test source TS files

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      'karma-coverage',
      require('karma-jasmine-html-reporter')
    ],
/*

    // Karma plugins loaded
    plugins: [
      'karma-jasmine',
      'karma-coverage',

      'karma-chrome-launcher'
    ],
*/

    client: {
      builtPaths: [appBase, appSrcBase,testingBase], // add more spec base paths as needed
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    files: [
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',



      // RxJs
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },



      { pattern: appSrcBase + '/systemjs.config.js', included: false, watched: false },
      { pattern: appSrcBase + '/systemjs.config.extras.js', included: false, watched: false },
      'karma-test-shim.js', // optionally extend SystemJS mapping e.g., with barrels

      //reflect-metadata for decorators
      {pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: true},
      {pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true},

      // transpiled application & spec code paths loaded via module imports


      { pattern: appBase + '**/*.js', included: false, watched: true },

      // Asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      { pattern: appSrcBase + '**/*.html', included: false, watched: true },
      { pattern: appSrcBase + '**/*.css', included: false, watched: true },

      // Paths for debugging with source maps in dev tools
      { pattern: appSrcBase + '**/*.ts', included: false, watched: false },
      { pattern: appBase + '**/*.js.map', included: false, watched: false },
      { pattern: testingSrcBase + '**/*.ts', included: false, watched: false },
      { pattern: testingBase + '**/*.js.map', included: false, watched: false}


    ],

    // Proxied base paths for loading assets
    proxies:
    {
      // required for modules fetched by SystemJS
     '/base/src/node_modules/': '/base/node_modules/'
    },

    exclude: [],
    preprocessors: {
      'dist/**/!(*spec).js': ['coverage']
    },
    reporters: ['progress','dots', 'kjhtml','coverage'],
    //reporters: ['progress',  'coverage'],
   /* coverageReporter: {
      dir: 'report/',
      reporters: [
        {type: 'json', subdir: 'coverage'}
      ]
    },*/
    coverageReporter: {
      reporters:[
        {type: 'json', subdir: '.', file: 'coverage-final.json'}
      ]
    },


    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
