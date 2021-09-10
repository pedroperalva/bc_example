import produce from 'immer';

const INITIAL_STATE = {
  state: 'Valor inicial',
};

export default function exemple(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@exemple/EXEMPLE_ACTION':
        draft.state = action.payload.exemple;
        break;
      default:
    }
  });
}
