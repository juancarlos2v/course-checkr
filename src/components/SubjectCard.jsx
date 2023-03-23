import style from "@styles/components/subject.module.scss"

const SubjectCard = ({ index, subject }) => {

    return (
        <>
            <div key={index} className={style.card} >
                <p >{subject.name.length < 20 ? subject.name : subject.abbreviation} </p>

                {subject.done && subject.final ? <p>Aprobada</p> :
                    <div>
                        <button className={
                            subject.done ? style.done : style.default}
                            type="button">
                            Cursada
                        </button>
                        <button className={
                            subject.final ? style.done : style.default}
                            type="button">Final
                        </button>
                    </div>
                }
            </div>
        </>
    )
}

export default SubjectCard;

// para colocar múltiples clases 😄
// className = {`${styles["more-clickable-area"]} ${styles["navbar-email"]} ${styles.pointer}`}