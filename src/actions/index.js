import * as c from './ActionTypes';

export const viewToggle = (view) => {
  return{
    type: c.VIEW_TOGGLE,
    view: view
  }
};

export const editToggle = () => ({
  type: c.EDIT_TOGGLE
});
