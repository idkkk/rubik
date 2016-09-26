/*
  Name   : define root container
  Author : zhangbaitong@163.com
  Date   : 2016-09-23
 */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prod')
} else {
  module.exports = require('./Root.dev')
}
