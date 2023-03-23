import style from "@styles/components/subject.module.scss"

const subjectsState = (inProgress, done, final) => {
    if (inProgress && (done && !final)) return (<div>
        <button className={
            { done } ? style.done : style.default}
            type="button"
            onClick={() => alert(done)}
        >Cursada
        </button>
        <button className={
            final ? { done } : style.default}
            type="button"
            onClick={() => alert(final)}
        >Final
        </button>
    </div>)
    if (inProgress && (!done || !final)) return (
        <p className={style["in-progress"]}>Cursando</p>
    )
    if (final) return (
        <p>Aprobado</p>
    )
    if (!inProgress) return (
        <p className={style["no-started"]}>No comenzado</p>
    )

}
const SubjectCard = ({ index, subject }) => {

    return (
        <>
            <div key={index} className={style.card} >
                <p >{subject.name.length < 20 ? subject.name : subject.abbreviation} </p>
                <div>
                    {subjectsState(subject.inProgress, subject.done, subject.final)}
                </div>
            </div>
        </>
    )
}

export default SubjectCard;

// para colocar múltiples clases 😄
// className = {`${styles["more-clickable-area"]} ${styles["navbar-email"]} ${styles.pointer}`} 