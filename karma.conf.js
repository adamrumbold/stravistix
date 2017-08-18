module.exports = function (config) {
    config.set({
        basePath: '.',
        browsers: [
            'PhantomJS',
            // 'Chrome'
        ],
        frameworks: [
            'systemjs', 'jasmine', 'promise'
        ],
        plugins: [
            'karma-jasmine',
            'karma-json-fixtures-preprocessor',
            'karma-systemjs',
            'karma-systemjs-preprocessor',
            'karma-promise',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher'
        ],
        phantomjsLauncher: {
            // exitOnResourceError: true  // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
        },
        // typescriptPreprocessor: {
        //     options: {
        //         sourceMap: true, // generate source maps
        //         noResolve: false // enforce type resolution
        //     },
        //     transformPath: function (path) {
        //         return path.replace(/\.ts$/, '.js');
        //     }
        // },
        files: [

            // 'plugin/node_modules/jquery/dist/jquery.js',
            // 'plugin/node_modules/lodash/lodash.min.js',
            // 'plugin/node_modules/chart.js/dist/Chart.bundle.js',
            // 'plugin/node_modules/d3/d3.js',
            // 'plugin/node_modules/file-saver/FileSaver.min.js',
            'plugin/common/**/*.ts',
            'plugin/core/**/*.ts',
            // 'specs/**/*.js',


            // 'specs/hellotest/*',
            // { pattern: "plugin/node_modules/lodash/*.min.js" },
            // { pattern: "specs/courses/*.ts" },
            // { pattern: "specs/hellotest/*.ts" },
            "specs/**/*.ts",
            // "specs/courses/*.ts"
        ],
        exclude: [
            // '**/*.map',
            'plugin/common/scripts/Background.ts',
            'plugin/core/scripts/SystemJS.*.ts',
            'plugin/core/scripts/InstallUpdateHandler.ts',
            // 'plugin/core/scripts/interfaces/*.ts',
            'plugin/core/scripts/Content.ts',
            'plugin/core/modules/jquery.appear.ts'
        ],
        systemjs: {
            // Patterns for files that you want Karma to make available,
            // but not loaded until a module requests them. eg. Third-party libraries.
            serveFiles: [
                'node_modules/plugin-typescript/lib/plugin.js',
                'node_modules/typescript/lib/typescript.js',

                'plugin/node_modules/lodash/lodash.min.js',
                'plugin/node_modules/q/q.js',
                'plugin/node_modules/jquery/dist/jquery.js',
                'plugin/node_modules/lodash/lodash.min.js',
                'plugin/node_modules/chart.js/dist/Chart.bundle.js',
                'plugin/node_modules/d3/d3.js',
                'plugin/node_modules/file-saver/FileSaver.min.js',

                'specs/fixtures/**/*.json',

            ],
            config: {
                typescriptOptions: {
                    "target": "es5",
                    "module": "system",
                    "lib": [
                        "dom",
                        "es6",
                        "webworker"
                    ],
                    // include: [
                    //     "specs/**/*.ts"
                    // ],
                    // exclude: [
                    //     "node_modules"
                    // ],
                    // tsconfig: './tsconfig.specs.json'
                },
                // basePath: './',// SystemJS configuration
                packages: {
                    'plugin/common/': {
                        format: 'cjs',
                        "defaultExtension": "ts",
                        "meta": {
                            "*.ts": {
                                "loader": "ts"
                            }
                        }
                    },
                    'plugin/core/': {
                        format: 'cjs',
                        "defaultExtension": "ts",
                        "meta": {
                            "*.ts": {
                                "loader": "ts"
                            }
                        }
                    },
                    'specs/': {
                        format: 'cjs',
                        "defaultExtension": "ts",
                        "meta": {
                            "*.ts": {
                                "loader": "ts"
                            }
                        }

                    },
                    "ts": {
                        "main": "lib/plugin.js"
                    },
                    'typescript': {
                        "main": "lib/typescript.js",
                        "meta": {
                            "lib/typescript.js": {
                                "exports": "ts"
                            }
                        }
                    },

                },
                paths: {
                    'traceur': './node_modules/traceur/dist/commonjs/traceur.js', // karma-systemjs required
                    'systemjs': './node_modules/systemjs/dist/system.js', // karma-systemjs required
                    'npm@plugin:': './base/plugin/node_modules/',
                    // "modules:": "./base/plugin/core/modules/",
                    'npm:': './base/node_modules/',

                    // 'npm:': '/base/node_modules/',
                    // "ts": "./base/node_modules/plugin-typescript/",
                    // "typescript": "./base/node_modules/typescript/",
                    // "ts": "./node_modules/plugin-typescript/lib/plugin.js",
                    // 'ts': './base/node_modules/plugin-typescript/lib/plugin.js',

                },
                map: {
                    'q': 'npm@plugin:q/q.js',
                    'jquery': 'npm@plugin:jquery/dist/jquery.js',
                    'lodash': 'npm@plugin:lodash/lodash.min.js',
                    'chart.js': 'npm@plugin:chart.js/dist/Chart.bundle.js',
                    'd3': 'npm@plugin:d3/d3.js',
                    'file-saver': 'npm@plugin:file-saver/FileSaver.min.js',

                    // "jqueryAppear": "modules:jquery.appear.js",

                    "ts": "npm:plugin-typescript/",
                    "typescript": "npm:typescript/",
                },
                meta: {
                    // "jquery": {
                    //     // exports: "jQuery",
                    //     format: "cjs",
                    // },
                },
                transpiler: 'ts'
            }
        },
        // karmaTypescriptConfig: {
        //     tsconfig: "./tsconfig.specs.json"
        // },

        systemjsPreprocessor: {
            // your systemjs builder config
            'specs/fixtures/**/*.json': ['json_fixtures']
        },
        // preprocessors: {
        //     // '**/*.ts': ['typescript'],
        //     'specs/fixtures/**/*.json': ['json_fixtures']
        // },
        jsonFixturesPreprocessor: {
            // strip this from the file path \ fixture name
            stripPrefix: 'specs/',
            // strip this to the file path \ fixture name
            prependPrefix: '',
            // change the global fixtures variable name
            variableName: '__fixtures__',
            // camelize fixture filenames (e.g 'fixtures/aa-bb_cc.json' becames __fixtures__['fixtures/aaBbCc'])
            camelizeFilenames: true,
            // transform the filename
            transformPath: function (path) {
                return path + '.js';
            }
        },
        colors: true,
        singleRun: false,
        browserConsoleLogOptions: {
            // path: './specs.log',
            terminal: true
        }
    });
};