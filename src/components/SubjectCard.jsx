import style from "@styles/components/subject.module.scss"

const SubjectCard = ({ index, subject }) => {

    return (
        <>
            <div key={index} className={style.card} >
                <p >{subject.name.length < 20 ? subject.name : subject.abrv} </p>

                {subject.cursada && subject.final ? <p>Aprobada</p> :
                    <div>
                        <button className={
                            subject.cursada ? style.cursada : style.default}
                            type="button">
                            Cursada
                        </button>
                        <button className={
                            subject.final ? style.cursada : style.default}
                            type="button">Final
                        </button>
                    </div>
                }
            </div>
        </>
    )
}

export default SubjectCard;