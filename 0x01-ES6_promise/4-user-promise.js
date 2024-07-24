export default function hsignUpUser(firstName, lastName) {
  const proResolve = Promise.resolve({ firstName, lastName });
  return proResolve;
}
