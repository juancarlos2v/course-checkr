import { useEffect, useState } from "react";

export const useSubjectByLevel = ({ subjects }) => {
  const [cbc, setCbc] = useState([]);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [fourth, setFourth] = useState([]);
  const [fifth, setFifth] = useState([]);

  useEffect(() => {
    setCbc(subjects.filter((subject) => subject.level == 0));
    setFirst(subjects.filter((subject) => subject.level == 1));
    setSecond(subjects.filter((subject) => subject.level == 2));
    setThird(subjects.filter((subject) => subject.level == 3));
    setFourth(subjects.filter((subject) => subject.level == 4));
    setFifth(subjects.filter((subject) => subject.level == 5));
  }, []);

  return {
    cbc,
    first,
    second,
    third,
    fourth,
    fifth,
  };
};
