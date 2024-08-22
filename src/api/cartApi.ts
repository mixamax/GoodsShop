import { makeRequest } from '../utils/makeRequest'
import { baseURL } from '../constants'
import { METHODS } from '../utils/makeRequest'
import { IRequestChangeProductQuantity } from '../models/cartModel'

class CartApi {
  async getCart(id: number) {
    return await makeRequest(`${baseURL}carts/user/${id}`)
  }
  //   async updateCard(id: number, data: IRequestChangeProductQuantity) {
  //     return await makeRequest(`${baseURL}carts/${id}`, {
  //       method: METHODS.PUT,
  //       body: { merge: true, products: data },
  //     })
  //   }
  async updateCard(id: number, data: IRequestChangeProductQuantity[]) {
    return await makeRequest(`${baseURL}carts/${id}`, {
      method: METHODS.PUT,
      body: { merge: true, products: data },
    })
  }
}

export const cartApi = new CartApi()
