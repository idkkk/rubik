/*
  Name   : configure store
  Author : zhangbaitong@163.com
  Date   : 2016-08-31
 */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}
