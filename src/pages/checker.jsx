import Subjects from "@container/Subjects"
import db from "@database"

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


const Checker = ({ responseSubjects }) => {


    return (
        <>
            <h1>Checkr</h1>
            <p>Hi </p>
            <h3>Materias</h3>
            <Subjects
                responseSubjects={responseSubjects}
            />
        </>
    )
}


export default Checker
