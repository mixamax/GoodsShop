import { cartApi } from '../../api/cartApi'
import { transformCartDTO } from '../../utils/transformCartDTO'
import { transformChangedCartDTO } from '../../utils/transformChangedCartDTO'
import {
  IRequestChangeProductQuantity,
  IResponseCartData,
} from '../../models/cartModel'

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

// export const updateCartByID = async (
//   id: number,
//   data: IRequestChangeProductQuantity
// ): Promise<IResponseCartData | ErrorType> => {
//   try {
//     const response = await cartApi.updateCard(id, data)
//     if (response.status === 200) {
//       let data = await response.json()
//       return transformChangedCartDTO(data)
//     }
//     throw new Error(response.statusText)
//   } catch (error) {
//     if (error instanceof Error) {
//       return { errorMessage: error.message }
//     } else {
//       return { errorMessage: 'Unknown error' }
//     }
//   }
// }

export const updateCartByID = async (
  id: number,
  data: IRequestChangeProductQuantity[]
): Promise<IResponseCartData | ErrorType> => {
  try {
    const response = await cartApi.updateCard(id, data)
    if (response.status === 200) {
      let data = await response.json()
      return transformChangedCartDTO(data)
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
