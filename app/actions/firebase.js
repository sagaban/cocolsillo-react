import * as types from './types';

export const addTransaction = data => ({ // eslint-disable-line import/prefer-default-export
  type: types.ADD_TRANSACTION,
  data,
});
