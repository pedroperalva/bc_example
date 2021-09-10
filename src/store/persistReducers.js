import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'bc-exemple',
      storage,
      whitelist: ['exemple'],
    },
    reducers
  );

  return persistedReducer;
};
