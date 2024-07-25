import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);
  const proAllSet = Promise.allSettled([signUp, upload]);
  return proAllSet.then((values) => {
    const arr = [];
    values.forEach((x) => {
      if (x.status === 'fulfilled') {
        arr.push({ status: x.status, value: x.value });
      } else {
        arr.push({ status: x.status, value: `${x.reason}` });
      }
    });
    return arr;
  });
}
