import style from './CardRM.module.css'

export default function CardRM(props) {
    return (
        <div className={style.card}>
            <h2 className={style.title}>{props.name}</h2>
            <img className={style.image} src={props.image} alt={props.name} />
            <h3 className={style.desc}>{props.desc}</h3>
            <p className={style.sexo}>{props.value}</p>
            <p className={style.estado}>{props.state}</p>
        </div>
    )
}