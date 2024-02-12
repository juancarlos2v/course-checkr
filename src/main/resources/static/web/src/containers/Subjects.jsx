import SubjectCard from "@components/SubjectCard"
import { useSubjects } from "@hooks/useSubjects";

const Subjects = ({ subjects }) => {


    const { cbc, first, second, third, fourth, fifth, approved } = useSubjects({ subjects })
    const levels = ["CBC", "1er año", "2do año", "3er año", "4to año", "5to año"]

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap"
        }} >
            <div className="container">

                <h3>CBC</h3>
                {cbc.map((subject, index) => (
                    <SubjectCard index={index} subject={subject} />
                ))}
            </div>
            <div className="container">
                <h3>1er año</h3>
                {first.map((subject, index) => (
                    <SubjectCard index={index} subject={subject} />
                ))}
            </div>
            <div className="container">
                <h3>2do año</h3>
                {second.map((subject, index) => (
                    <SubjectCard index={index} subject={subject} />
                ))}
            </div>
            <div className="container">
                <h3>3er año</h3>
                {third.map((subject, index) => (
                    <SubjectCard index={index} subject={subject} />
                ))}
            </div>
            <div className="container">
                <h3>4to año</h3>
                {fourth.map((subject, index) => (
                    <SubjectCard index={index} subject={subject} />
                ))}
            </div>
            <div className="container">
                <h3>5to año</h3>
                {fifth.map((subject, index) => (
                    <SubjectCard index={index} subject={subject} />
                ))}
            </div>
            {/* <div>
                {approved.map((ap) => (
                    <p>{ap} </p>
                ))}
            </div> */}
            <style jsx>{`
                .container {
                display: "flex",
                justify-content: "space-between"
                }
            `}</style>
        </div>
    )
}

export default Subjects