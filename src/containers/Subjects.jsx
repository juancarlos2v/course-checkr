import SubjectCard from "@components/SubjectCard"

const Subjects = ({ subjects }) => {
    const levels = [
        { "name": "CBC", "year": 0 },
        { "name": "1er año", "year": 1 },
        { "name": "2do año", "year": 2 },
        { "name": "3er año", "year": 3 },
        { "name": "4to año", "year": 4 },
        { "name": "5to año", "year": 5 }]

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap"
            }} >

                {levels.map(level => (
                    <div>
                        <h3>{level.name} </h3>
                        {subjects.map((subject, index) => (
                            subject.level == level.year &&
                            <SubjectCard index={index} subject={subject} />
                        ))}
                    </div>
                ))}

            </div>
        </>
    )
}

export default Subjects