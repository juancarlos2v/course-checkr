import { useEffect, useState } from "react";
import SubjectCard from "@components/SubjectCard"
import useUpdateSubjects from "@hooks/useUpdateSubjects";


const Subjects = ({ subjects, subjectsFadu }) => {

    const totalSubjects = subjects.concat(subjectsFadu)

    const cbc = subjects.filter(subject => subject.level == 0);
    const first = subjects.filter(subject => subject.level == 1);
    const second = subjects.filter(subject => subject.level == 2);
    const third = subjects.filter(subject => subject.level == 3);
    const fourth = totalSubjects.filter(subject => subject.level == 4)
    const fifth = totalSubjects.filter(subject => subject.level == 5)

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