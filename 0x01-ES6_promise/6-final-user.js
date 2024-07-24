import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);
  const proAllSet = Promise.allSettled([signUp, upload]);
  return proAllSet.then((values) => {
    const res = [];
    values.forEach((e) => {
      if (e.status === 'fulfilled') {
        res.push({ status: e.status, value: e.value });
      } else {
        res.push({ status: e.status, value: `${e.reason}` });
      }
    });
    return res;
  });
}
