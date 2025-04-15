export default function createIteratorObject(report) {
  let arr = [];
  for (let val of Object.values(report.allEmployees)) {
    arr.push(...val);
  }
  return arr;
}
