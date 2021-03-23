import React, {
  createContext, useEffect, useLayoutEffect, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import reducers from './Reducers';
import { ACTION } from './Actions';
import { getData } from '../assets/utils/fetchData';
import initialState from './InitialState';
import { headerNavTitles } from '../constants';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const { auth, pageTitle } = state;

  const router = useRouter();
  const { pathname } = router;

  // PAGE TITLE & NAV TITLE
  useLayoutEffect(() => {
    if (pathname.indexOf('/bend-admin/') !== -1) {
      if (pageTitle !== 'bendAdmin') {
        dispatch({
          type: ACTION.PAGE_TITLE,
          payload: 'bendAdmin',
        });

        dispatch({
          type: ACTION.NAV_TITLES,
          payload: headerNavTitles.bend,
        });
      }
    } else if (
      pathname.indexOf('/app/') !== -1
    ) {
      if (pageTitle !== 'afterLogin') {
        dispatch({
          type: ACTION.PAGE_TITLE,
          payload: 'afterLogin',
        });

        dispatch({
          type: ACTION.NAV_TITLES,
          payload: headerNavTitles.afterLogin,
        });
      }
    } else {
      dispatch({
        type: ACTION.PAGE_TITLE,
        payload: 'landingPage',
      });

      dispatch({
        type: ACTION.NAV_TITLES,
        payload: headerNavTitles.landingPage,
      });
    }
  }, [pathname]);

  // AUTH & IS OLD USER
  useEffect(async () => {
    const firstLogin = localStorage.getItem('firstLogin');

    dispatch({
      type: ACTION.UPDATE_OLD_USER,
      payload: true,
    });

    if (firstLogin) {
      const res = await getData('api/auth/accessToken');

      dispatch({
        type: ACTION.AUTH,
        payload: {
          token: res.accessToken,
          user: res.user,
        },
      });
    }
  }, []);

  // USERS
  useEffect(async () => {
    if (auth.token) {
      if (auth.user.role === 'admin' || auth.user.role === 'master admin') {
        getData('api/user', auth.token)
          .then((res) => {
            if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } });
            dispatch({ type: 'ADD_USERS', payload: res.users });
          });
      }
    } else {
      dispatch({ type: 'ADD_USERS', payload: [] });
    }
  }, [auth.token]);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>

  );
};

DataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
