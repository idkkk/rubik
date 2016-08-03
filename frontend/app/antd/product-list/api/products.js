/**
 * Mocking client-server processing
 */

import _products from './products.json'

const TIMEOUT = 100

export default {
  getProducts(cb, timeout) {
    setTimeout(() => cb(_products), timeout || TIMEOUT)
  },

  buyProducts(payload, cb, timeout) {
    setTimeout(() => cb(), timeout || TIMEOUT)
  },
  mockProducts(){
    const mockState = new Object()
    mockState.dataSource = []
    for (let i = 0; i < 5; i++) {
      mockState.dataSource.push({
        key: i,
        name: `商品${i}`,
        num: `${i+Math.floor(Math.random()*10)}`,
        desc: `网店直供${i}号`,
      });
    }
    mockState.searchSource = {name:"",desc:""}
    return mockState
  }
}