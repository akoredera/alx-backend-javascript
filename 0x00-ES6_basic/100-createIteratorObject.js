export default function createIteratorObject(report) {
	var arr = [];
	for (var val of Object.values(report.allEmployees)){
		arr.push(...val);
	}
	return arr;
}
