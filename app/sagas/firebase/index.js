
// eslint-disable-next-line import/prefer-default-export
export function* addTransaction({ data }, getFirebase) {
  try {
    console.log('Hola saga!: ', data);
    yield getFirebase().push('transactions', data);
  } catch (e) {
    yield console.log('error saga!');
  }
}
