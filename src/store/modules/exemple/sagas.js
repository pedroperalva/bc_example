import { takeLatest, call, put, all } from 'redux-saga/effects';

export function* exempleSaga({ payload }) {
  try {
    // Chamada para a API
  } catch (err) {
    // Saída de Erro
  }
}

export default all([takeLatest('@exemple/EXEMPLE_ACTION', exempleSaga)]);
