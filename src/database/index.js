const st = [];

const getAll = async () => {
  const response = await fetch("http://localhost:3001/students");
  const students = await response.json();
  return students;
};

const getStudent = async (id) => {
  const response = await fetch(`http://localhost:3001/students/${id}`);
  const student = await response.json();
  console.log(student);
  return student;
};

const getSubjectsByStudent = async (id) => {
  const response = await fetch(`http://localhost:3001/students/${id}`);
  const student = await response.json();
  const subjects = await student.subjects;
  return subjects;
};

const getFaduSubjects = async () => {
  const response = await fetch(`http://localhost:3002/subjects`);
  const subjects = await response.json();
  return subjects;
};

getStudent("95336850");

export default {
  getAll,
  getStudent,
  getSubjectsByStudent,
  getFaduSubjects,
};
