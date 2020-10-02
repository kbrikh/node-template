const SpecReporter = require('jasmine-spec-reporter').SpecReporter

jasmine.getEnv().clearReporters() // remove default reporter logs
jasmine.getEnv().addReporter(new SpecReporter({ // add jasmine-spec-reporter
    suite: {
        displayNumber: true
    },
    spec: {
        displayErrorMessages: true,
        displayStacktrace: 'none',
        displaySuccessful: true,
        displayFailed: true,
        displayPending: true,
        displayDuration: true
    },
    summary: {
        displayErrorMessages: true,
        displayStacktrace: 'pretty',
        displaySuccessful: false,
        displayFailed: true,
        displayPending: false,
        displayDuration: true
    },
    colors: {
        enabled: true,
        successful: 'green',
        failed: 'red',
        pending: 'gray',
        // prettyStacktraceFilename: "red",
        prettyStacktraceLineNumber: 'yellow',
        prettyStacktraceColumnNumber: 'yellow',
        prettyStacktraceError: 'red'
    },
    prefixes: {
        successful: '\u2714 ',
        failed: '\u274c ',
        pending: '\u29D7 '
    }
}))
