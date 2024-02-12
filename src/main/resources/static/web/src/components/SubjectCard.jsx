import style from "@styles/components/subject.module.scss"
import SubjectProgress from "./subjectProgress";


const SubjectCard = ({ index, subject }) => {

    return (
        <>
            <div key={index} className={style.card} >
                <p >{subject.name.length < 20 ? subject.name : subject.abbreviation} </p>
                <div>
                    <SubjectProgress
                        inProgress={subject.inProgress}
                        done={subject.done}
                        final={subject.final}
                    />
                </div>
            </div>
        </>
    )
}

export default SubjectCard;

// para colocar múltiples clases 😄
// className = {`${styles["more-clickable-area"]} ${styles["navbar-email"]} ${styles.pointer}`} 