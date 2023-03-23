import { useState } from "react";

const useUpdateSubjects = (asig) => {
  const [subjects, setSubjects] = useState(null);
  setSubjects(asig);

  return subjects;
};
