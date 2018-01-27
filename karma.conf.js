// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    config.set({
        //basePath: '',
        frameworks: ['jasmine', "karma-typescript"],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-typescript')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        files: [{
                pattern: './src/**/*.ts',
                watched: true
            },
            {
                pattern: 'node_modules/rxjs/**/*.js',
                included: false,
                watched: false
            },
            {
                pattern: 'node_modules/rxjs/**/*.js.map',
                included: false,
                watched: false
            }
        ],
        // karmaTypescriptConfig: {
            // compilerOptions: {
            //     noImplicitAny: false,
            //     target: "ES5",
            //     removeComments: true,
            //     declaration: true,
            //     emitDecoratorMetadata: true,
            //     experimentalDecorators: true,
            //     module: "commonjs"
            // },
            // tsconfig: "./src/tsconfig.spec.json",
            // exclude: ["node_modules"]
        //},
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },
        mime: {
             'text/x-typescript': ['ts']
         },
        // coverageReporter: {
        //     includeAllSources: true,
        //       type: "html",
        //     dir: 'coverage/'
        // },
        coverageIstanbulReporter: {
             reports: ['html',  'text-summary']
         },
        //reporters: ['progress', 'coverage' ,  "karma-typescript"],
        reporters: ['progress', 'kjhtml' ,  'coverage-istanbul'],
        //['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO, //config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    });
};