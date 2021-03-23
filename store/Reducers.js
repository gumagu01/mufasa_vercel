import { ACTION } from './Actions';
import initialState from './InitialState';

const reducers = (state, action) => {
  const draftState = { ...state };

  switch (action.type) {
    // SPIN_LOADER
    case ACTION.SPIN_LOADER:
      return {
        ...draftState,
        spinLoader: action.payload,
      };

    // NAV_TITLES
    case ACTION.NAV_TITLES:
      return {
        ...draftState,
        navTitles: action.payload,
      };

    // UPDATE_OLD_USER
    case ACTION.PAGE_TITLE:
      return {
        ...draftState,
        pageTitle: action.payload,
      };

    // UPDATE_OLD_USER
    case ACTION.UPDATE_OLD_USER:
      return {
        ...draftState,
        oldUser: action.payload,
      };

    // ADD_MODAL
    case ACTION.ADD_MODAL:
      return {
        ...draftState,
        modal: action.payload,
      };

      // NOTIFY
    case ACTION.NOTIFY:
      return {
        ...draftState,
        notify: action.payload,
      };

      // ADD USERS
    case ACTION.ADD_USERS:
      return {
        ...draftState,
        users: action.payload,
      };

      // AUTH
    case ACTION.AUTH:
      return {
        ...draftState,
        auth: action.payload,
      };

      // INITIAL STATE
    case ACTION.INITIAL_STATE:
      return initialState;

      // loading Register And Login ==========================================================
    case ACTION.START_LOADING:
      return {
        ...draftState,
        loading: true,
      };
    case ACTION.END_LOADING:
      return {
        ...draftState,
        loading: false,
      };

      // Update user data ========================================================================
    case ACTION.UPDATE_USER_DATA:
      return {
        ...draftState,
        userData: {
          ...draftState.userData,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducers;
