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

export const masterKegList = (save) => {
  const { keg, id } = save;
    return({
      type: c.KEG_LIST,
      keg: keg,
      id: id
    })
  }
