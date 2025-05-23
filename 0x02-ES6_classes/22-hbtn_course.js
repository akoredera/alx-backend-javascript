export default class ALXCourse {
  constructor(name, length, students){
      this._name = name;
      this._length = length;
      this._students = students;
  }
  get students() {
    return this._students;
  }
  set students(students) {
    if (!Array.isArray(students)) {
      throw new Error;
    }
    this._students = students;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }
  get length() {
    return this._length;
  }
  set length(length) {
    if (typeof length == 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }
}

