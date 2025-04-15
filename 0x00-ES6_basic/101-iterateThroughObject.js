export default function iterateThroughObject(reportWithIterator) {
  let empName = '';
  for (const item of reportWithIterator) {
    empName += item;
    if (item !== reportWithIterator[reportWithIterator.length - 1]) {
      empName += ' | ';
    }
  }
  return empName;
}
