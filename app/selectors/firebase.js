const selectDataFromState = state => state.firebase.data;
// eslint-disable-next-line
export const selectTransactionsFromState = state => selectDataFromState(state).transactions;
