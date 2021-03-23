import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { DataContext } from '../../../store/GlobalState';
import { ACTION } from '../../../store/Actions';

function Home() {
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;

  const handleLogout = () => {
    Cookie.remove('refreshToken', { path: '/api/auth/accessToken' });
    localStorage.removeItem('firstLogin');
    dispatch({
      type: ACTION.AUTH,
      payload: {},
    });
  };

  const loggedRouter = () => (
    <div className="mx-auto my-4">
      <p>
        Bem vindo,
        {auth.user.email}
      </p>
      <button type="submit" onClick={handleLogout}>Logout</button>
    </div>
  );

  const router = useRouter();

  useEffect(() => {
    if (Object.keys(auth).length === 0) {
      router.push('/bend-admin/');
    } else if (Object.keys(auth).length !== 0 && !auth.user.admin) {
      router.push('/bend-admin/denied-access');
    }
  }, [auth]);

  return (
    <div className="d-flex flex-column">
      <p className="mx-auto my-4">ADMIN HOME</p>

      {
                Object.keys(auth).length === 0
                  ? (
                    ''
                  ) : (
                    loggedRouter()
                  )
            }

    </div>

  );
}

export default Home;
