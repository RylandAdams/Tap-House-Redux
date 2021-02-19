import * as c from './ActionTypes';

export const viewToggle = (view) => {
  return{
    type: c.VIEW_TOGGLE,
    view: view
  }
};
