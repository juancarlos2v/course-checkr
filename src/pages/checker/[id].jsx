import Subjects from "@container/Subjects"
import db from "@database";

export const getServerSideProps = async (ctx) => {
    const id = ctx.query.id;
    const student = await db.getStudent(id);
    const subjectsFadu = await db.getFaduSubjects();

    return {
        props: {
            student,
            subjectsFadu
        }
    }
}

const Checker = ({ student, subjectsFadu }) => {

    return (
        <>
            <h1>Checkr</h1>
            <p>Hi {student.name} </p>

            <h3>Materias</h3>
            <Subjects
                subjects={student.subjects}
                subjectsFadu={subjectsFadu}
            />
        </>
    )
}


export default Checker
