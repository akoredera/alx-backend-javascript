export default function getStudentsByLocation(arr, city) {
  const newArr = arr.filter((arra) => arra.location === city);
  return newArr;
}
