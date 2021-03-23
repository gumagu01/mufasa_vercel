import React, { useContext } from 'react';
import { deleteData } from '../../assets/utils/fetchData';
import { deleteItem } from '../../store/Actions';
import { DataContext } from '../../store/GlobalState';

function Modal() {
  const [state, dispatch] = useContext(DataContext);
  const { modal, auth } = state;
  const bodyMsg = modal.body || 'Você tem certeza que deseja deletar este item?';
  const title = modal.title || '';

  const handleSubmit = async () => {
    if (modal.type === 'ADD_USERS') {
      await deleteData(`api/user/${modal.id}`, auth.token)
        .then((res) => {
          if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

          dispatch(deleteItem(
            modal.data,
            modal.id,
            'ADD_USERS',
          ));
          return dispatch({ type: 'NOTIFY', payload: { success: res.msg } });
        });
      dispatch({ type: 'ADD_MODAL', payload: {} });
    }
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            {bodyMsg}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleSubmit}
              data-bs-dismiss="modal"
            >
              Sim
            </button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
