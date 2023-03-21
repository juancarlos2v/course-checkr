const getAll = async () => {
  const response = await fetch("http://localhost:3001/students");
  const student = await response.json();

  return console.log(student);
};

const getStudent = async (id) => {
  const response = await fetch(`http://localhost:3001/students/${id}`);
  const student = await response.json();
  return console.log(student);
};

const getSubjectsByStudent = async (id) => {
  const response = await fetch(`http://localhost:3001/students/${id}`);
  const student = await response.json();
  return console.log(student.subjects);
};

getSubjectsByStudent("95304678");

export default {
  getAll,
  getStudent,
  getSubjectsByStudent,
};
