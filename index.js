'use strict'

module.exports = (string, width) => string.length<width?((Array(width).join("0")+string).slice(-width)):string
