import { cartApi } from '../../api/cartApi'
import { transformCartDTO } from '../../utils/transformCartDTO'
import { IResponseCartData } from '../../models/cartModel'

type ErrorType = {
  errorMessage: string
}
export const getCartByID = async (
  id: number
): Promise<IResponseCartData | ErrorType> => {
  try {
    const response = await cartApi.getCart(id)

    if (response.status === 200) {
      let data = await response.json()

      return transformCartDTO(data)
    }
    throw new Error(response.statusText)
  } catch (error) {
    if (error instanceof Error) {
      return { errorMessage: error.message }
    } else {
      return { errorMessage: 'Unknown error' }
    }
  }
}
