import Subjects from "@container/Subjects"
import db from "@database";

export const getServerSideProps = async (ctx) => {
    const id = ctx.query.id;
    const student = await db.getStudent(id);

    return {
        props: {
            student
        }
    }
}

const Checker = ({ student }) => {

    return (
        <>
            <h1>Checkr</h1>
            <p>Hi {student.id} </p>

            <h3>Materias</h3>
            <Subjects
                subjects={student.subjects}
            />
        </>
    )
}


export default Checker
