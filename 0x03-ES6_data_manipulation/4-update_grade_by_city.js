/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
export default function updateStudentGradeByCity(getListStudent, city, newGrade) {
  const newGetListStudent = getListStudent
    .filter((studentList) => studentList.location === city)
    .map((studentList) => {
      newGrade.map((grade) => {
        if (grade.studentId === studentList.id) {
	  studentList.grade = grade.grade;
        }
        if (!studentList.hasOwnProperty('grade')) {
	  studentList.grade = 'N/A';
        }
        return studentList;
      });
      return studentList;
    });
  return newGetListStudent;
}
