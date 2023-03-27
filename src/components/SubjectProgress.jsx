import style from "@styles/components/subject.module.scss"

const SubjectProgress = ({ inProgress, done, final }) => {
    if (inProgress) {
        return (
            <p className={style["in-progress"]}>Cursando</p>
        )
    }
    if (final) {
        return (
            <p>Aprobado</p>
        )
    }
    if (!inProgress && !done) {
        return (
            <p className={style["no-started"]}>No comenzado</p>
        )
    }
    if (!final) {
        return (<div>
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
    }

}

export default SubjectProgress