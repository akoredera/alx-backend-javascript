export default function createIteratorObject(report) {
  const arr = [];
  for (let val of Object.values(report.allEmployees)) {
    arr.push(...val);
  }
  return arr;
}
