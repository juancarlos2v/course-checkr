import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext(null);

const StudentContextProvider = ({ children }) => {
  const [student, setStudent] = useState({});
  const [subject, setSubjects] = useState([]);
  const [approved, setApproved] = useState([]);

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
