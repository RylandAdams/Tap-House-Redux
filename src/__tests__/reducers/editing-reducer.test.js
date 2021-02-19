import editingReducer from '../../Reducers/editing-reducer';
import * as a from "../../actions/ActionTypes";

describe('editing', () => {

  let action;

  test('Should check the editing reducer reverses boolean', () => {
    action = {
      type: a.EDIT_TOGGLE
    }
    expect(editingReducer(true, action)).toEqual(false)
  });
});