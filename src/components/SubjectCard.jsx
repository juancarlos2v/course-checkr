import style from "@styles/components/subject.module.scss"


const SubjectCard = ({ index, subject }) => {

    return (
        <>
            <div key={index} className={style.card} >
                <p >{subject.name.length < 20 ? subject.name : subject.abbreviation} </p>
                <div>
                    {subject.inProgress && <p className={style["in-progress"]}>Cursando</p>}
                    {subject.final && <p>Aprobado</p>}
                    {!subject.inProgress && !subject.done && < p className={style["no-started"]}>No comenzado</p>}
                    {!subject.final && subject.done && <div>
                        <button className={
                            subject.done ? style.done : style.default}
                            type="button"
                            onClick={() => alert(subject.done)}
                        >Cursada
                        </button>
                        <button className={
                            subject.final ? subject.done : style.default}
                            type="button"
                            onClick={() => alert(subject.final)}
                        >Final
                        </button>
                    </div>}

                </div>
            </div>
        </>
    )
}

export default SubjectCard;

// para colocar múltiples clases
// className = {`${styles["more-clickable-area"]} ${styles["navbar-email"]} ${styles.pointer}`} 