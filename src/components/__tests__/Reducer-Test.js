import ProductsReducer from '../../reducers/productsReducer'
import {products} from '../../data/products';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(ProductsReducer(undefined, {})).toEqual({})
  })

  it('should handle ADD_TODO', () => {
    expect(
      ProductsReducer([], {
        type: 'SUCCESS',
        payload: products
      })
    ).toEqual({
        status: 'SUCCESS',
        data:products
      }
    )


  })
})
