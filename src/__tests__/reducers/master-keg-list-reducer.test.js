import * as a from '../../actions/ActionTypes';
import masterKegList from '../../Reducers/master-keg-list-reducer';

describe('masterKegList', () => {

  test('Should return default state', () => {
    let action = {
      type: a.KEG_LIST,
      keg: {
        name: "TEST",
        brand: "THE TESTS",
        alcoholContent: "0%",
        price: "10.00",
        quantity: 1
      } ,
      id: 0
    }
    expect(masterKegList({}, action)).toEqual({ 
      [0] : {
        keg: { name: "TEST",
        brand: "THE TESTS",
        alcoholContent: "0%",
        price: "10.00",
        quantity: 1},
      }
    });
  })
})