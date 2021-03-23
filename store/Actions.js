export const ACTION = {

  // SPIN_LOADER
  SPIN_LOADER:
  'SPIN_LOADER',

  // UPDATE NAV TITLE
  NAV_TITLES:
  'NAV_TITLES',

  // UPDATE PAGE TITLE
  PAGE_TITLE:
  'PAGE_TITLE',

  // UPDATE OLD USER
  UPDATE_OLD_USER:
        'UPDATE_OLD_USER',

  // ADD_MODAL
  ADD_MODAL:
        'ADD_MODAL',

  // NOTIFY
  NOTIFY:
        'NOTIFY',

  // AUTH
  AUTH:
        'AUTH',

  // INITIAL_STATE
  INITIAL_STATE:
        'INITIAL_STATE',

  // LOADING REGISTER AND LOGIN ========================================================
  START_LOADING:
        'START_LOADING',
  END_LOADING:
        'END_LOADING',

  // UPDATE USER DATA ========================================================
  UPDATE_USER_DATA:
        'UPDATE_USER_DATA',

  // ADD USERS
  ADD_USERS:
        'ADD_USERS',

  //

};

export const updateItem = (data, id, post, type) => {
  const newData = data.map((item) => (item._id === id ? post : item));
  return ({ type, payload: newData });
};

export const deleteItem = (data, id, type) => {
  const newData = data.filter((item) => (item._id !== id));
  return ({ type, payload: newData });
};
