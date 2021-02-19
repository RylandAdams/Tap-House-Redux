import * as c from "./../actions/ActionTypes";

export default (state = 0 , action) => {
  const { view } = action
  switch(action.type) {
    case c.VIEW_TOGGLE:
      const newState = view
      return newState;
    default:
      return state;
  }
}