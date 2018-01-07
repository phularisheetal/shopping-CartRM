
import { getProducts,filterProducts } from '../../actions/getProducts';
import {products} from '../../data/products';

describe('Test actions', () => {
    it('should create an action to get products', async () => {
      const expectedAction = {
        type: 'SUCCESS',
        payload:products
      }
      expect(getProducts()).toEqual(expectedAction)

    });

    it('should create an action to filter products', async () => {
      let type = 'brand';
      let value = 'MARIGOLD';
      const expectedAction = {
        type: 'filter',
        payload:{products,type,value}
      }
      expect(filterProducts(type,value)).toEqual(expectedAction)

    });
});
