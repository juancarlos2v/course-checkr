import { useEffect, useState } from "react"
import db from "@database"
import SubjectCard from "@components/SubjectCard"

export const getServerSideProps = async () => {
    const responseStudent = await db.getStudent("95336850");
    const responseSubjects = await responseStudent.subjects;

    console.log(responseSubjects)
    return {
        props: {
            responseStudent,
            responseSubjects
        }
    }
}


const Checker = ({ responseStudent, responseSubjects }) => {
    const [student, setStudent] = useState([]);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        setStudent(responseStudent);
        setSubjects(responseSubjects)
    }, [])

    return (
        <>
            <h1>Checkr</h1>
            <p>Hi {student.id}</p>
            <h3>Materias</h3>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap"
            }} >
                {subjects.map((subject, index) =>
                    <SubjectCard
                        index={index}
                        subject={subject} />
                )}
            </div>
        </>
    )
}


export default Checker
