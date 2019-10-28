'use strict'

module.exports = require('./lib/parser')

// Add backward compat
const errors = require('redis-errors')
module.exports.ReplyError = errors.ReplyError;
module.exports.RedisError = errors.RedisError;
module.exports.ParserError = errors.ParserError;
