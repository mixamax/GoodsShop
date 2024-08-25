import { makeRequest } from '../utils/makeRequest'
import { baseURL } from '../constants'

class CartApi {
  async getCart(id: number) {
    return await makeRequest(`${baseURL}carts/user/${id}`)
  }
}

export const cartApi = new CartApi()
