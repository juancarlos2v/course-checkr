import { useEffect, useState } from "react";
import SubjectCard from "@components/SubjectCard"


const Subjects = ({ responseSubjects }) => {
    const [subjects, setSubjects] = useState([]);

    const cbc = subjects.filter(subject => subject.year == 0);
    const first = subjects.filter(subject => subject.year == 1);
    const second = subjects.filter(subject => subject.year == 2);
    const third = subjects.filter(subject => subject.year == 3);

    useEffect(() => {
        setSubjects(responseSubjects)
    }, [])
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap"
        }} >
            <div className="container">
                <h3>CBC</h3>
                {cbc.map((subject, index) => (
                    <SubjectCard
                        index={index}
                        subject={subject}
                    />
                ))}
            </div>
            <div className="container">
                <h3>1er año</h3>
                {first.map((subject, index) => (
                    <SubjectCard
                        index={index}
                        subject={subject}
                    />
                ))}
            </div>
            <div className="container">
                <h3>2do año</h3>
                {second.map((subject, index) => (
                    <SubjectCard
                        index={index}
                        subject={subject}
                    />
                ))}
            </div>
            <div className="container">
                <h3>3er año</h3>
                {third.map((subject, index) => (
                    <SubjectCard
                        index={index}
                        subject={subject}
                    />
                ))}
            </div>
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