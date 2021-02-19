import * as c from "./../actions/ActionTypes";

export default (state = {0: {}, id: 0}, action) => {
  const { keg, id } = action;
  switch (action.type) {
    case c.KEG_LIST:
      return Object.assign({}, state, {
        [id]: {
          keg: keg,
        }
      });
      default:
        return state;
  }
}