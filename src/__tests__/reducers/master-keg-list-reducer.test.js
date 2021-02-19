import * as a from '../../actions/ActionTypes';
import masterKegList from '../../Reducers/master-keg-list-reducer';

describe('masterKegList', () => {
  let action;

  test('Should return default state', () => {
    action ={
      type: a.KEG_LIST,
      keg: {},
      id: 0
    }
    expect(masterKegList({}, )).toEqual({ keg: {}, id: 0})
  })
})