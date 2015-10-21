module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      'spec/*.js'
    ],
    browsers: ['PhantomJS'],
    singleRun: true,
    plugins: ['karma-jasmine', 'karma-coverage', 'karma-phantomjs-launcher'],
    reporters: ['progress', 'coverage'],
    preprocessors: { '*.js': ['coverage']},
    coverageReporter: { type: 'text' }
  });
};
