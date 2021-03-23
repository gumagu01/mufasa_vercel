import { useRouter } from 'next/router';
import React, { useContext, useState, useEffect } from 'react';
import { getData, patchData } from '../../../assets/utils/fetchData';
import GoBackButton from '../../../snnipets/GoBackButton';
import UpdateButton from '../../../sections/Short/UpdateButton';
import { updateItem } from '../../../store/Actions';
import { DataContext } from '../../../store/GlobalState';

function Profile() {
  const router = useRouter();

  const [state, dispatch] = useContext(DataContext);
  const {
    users, auth, loading,
  } = state;

  const id = auth.user && auth.user._id;

  const [editUser, setEditUser] = useState([]);
  const [role, setRole] = useState('');

  const handleUpdate = async () => {
    dispatch({ type: 'START_LOADING' });

    if (Object.keys(auth).length === 0) {
      router.push('/bend-admin/denied-access');
      dispatch({ type: 'END_LOADING' });
      return;
    }

    await patchData(`api/user/${editUser._id}`, { role }, auth.token)
      .then((res) => {
        if (res.err) return dispatch({ type: 'NOTIFY', payload: { err: res.err } });

        let admin = false;
        if (role === 'admin' || role === 'master admin') {
          admin = true;
        }

        dispatch(updateItem(
          users,
          editUser._id,
          { ...editUser, role, admin },
          'ADD_USERS',
        ));

        setEditUser({
          ...editUser,
          admin,
        });

        return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
      });
    dispatch({ type: 'END_LOADING' });
  };

  useEffect(async () => {
    if (!id || !auth.token) return;

    const res = await getData(`api/user/${id}`, auth.token);

    if (res.err) return dispatch({ type: 'NOTIFY', payload: { err: res.err } });

    setEditUser(res.data);
    setRole(res.data.role);
  }, [id, auth]);

  return (
    <div className="my-4">

      <GoBackButton />

      <div className="col-md-4 mx-auto my-4 w-100">
        <h2 className="text-secondary">Editar Usuário</h2>

        <div className="my-2">
          <label htmlFor="userId" className="me-2">ID</label>
          <input type="text" id="userId" defaultValue={editUser._id} disabled />
        </div>

        <div className="my-2">
          <label htmlFor="email" className="me-2">Email</label>
          <input type="text" id="email" defaultValue={editUser.email} disabled />
        </div>

        <div className="my-2">
          <label htmlFor="cpf" className="me-2">CPF</label>
          <input type="text" id="cpf" defaultValue={editUser.CPF} disabled />
        </div>

        <div className="my-2">
          <label htmlFor="createdAt" className="me-2">createdAt</label>
          <input type="text" id="createdAt" defaultValue={editUser.createdAt} disabled />
        </div>

        <div className="my-2">
          <label htmlFor="updatedAt" className="me-2">updatedAt</label>
          <input type="text" id="updatedAt" defaultValue={editUser.updatedAt} disabled />
        </div>

        <div className="my-2">
          <label htmlFor="admin" className="me-2">Admin</label>
          <input type="text" id="admin" defaultValue={editUser.admin} disabled />
        </div>

        <div className="my-2">
          <label htmlFor="role" className="me-2">Role</label>
          <input type="text" id="role" defaultValue={editUser.role} disabled />
        </div>

        <UpdateButton
          onClick={handleUpdate}
          loading={loading}
          textContent="Update"
        />
      </div>

    </div>
  );
}

export default Profile;
