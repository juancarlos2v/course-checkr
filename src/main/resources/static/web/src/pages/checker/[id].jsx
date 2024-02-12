import Subjects from "@container/Subjects"
import { subjects } from "@database";

export const getServerSideProps = async (ctx) => {
    const id = ctx.query.id;
    //const student = await db.getStudent(id);


    return {
        props: {
            id
        }
    }
}

const Checker = ({ id }) => {

    return (
        <>
            <h1>Checkr</h1>
            <p>Hi {id} </p>

            <h3>Materias</h3>
            <Subjects
                subjects={subjects}
            />

        </>
    )
}


export default Checker
