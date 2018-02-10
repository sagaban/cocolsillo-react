// import { constants } from 'react-redux-firebase';
import { takeEvery } from 'redux-saga/effects';
import { addTransaction } from 'sagas/firebase';
import * as types from 'actions//types';

// const { SET } = constants.actionTypes;

function firebaseWrapper(generator, firebase) {
  return function* handleData(data) {
    yield generator(data, firebase);
  };
}

export default function* saga(getFirebase) {
  yield takeEvery(types.ADD_TRANSACTION, firebaseWrapper(addTransaction, getFirebase));
}
