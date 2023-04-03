'use strict';

const {format, createLogger, transports} = require('winston');

const {combine, timestamp, label, prettyPrint} = format;
const CATEGORY = 'TEST';

const logger = createLogger({
    level: 'info',
    format: combine(
        label({label: CATEGORY}),
        timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        prettyPrint()
    ),
    defaultMeta: {service: 'q-templates-automated-tests'},
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new transports.File({filename: './automated-tests/logs/error.log', level: 'error'}),
        new transports.File({filename: './automated-tests/logs/combined.log'})
    ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new transports.Console({
            format: format.simple()
        })
    );
}

module.exports = logger;
