
// eslint-disable-next-line import/prefer-default-export
export function* addTransaction({ data }, getFirebase) {
  try {
    yield getFirebase().push('transactions', data);
  } catch (e) {
    yield console.log('error saga!');
  }
}
