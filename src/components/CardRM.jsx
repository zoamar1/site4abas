import style from './CardRM.module.css'
export default function CardRM(props) {
    const ball = (color) =>
     <div style={{width: "10px",height: "10px", borderRadius: "100%", backgroundColor: color}}></div>
    
    return (
        <div className={style.card}>
            <h2 className={style.title}>{props.name}</h2>
            <img className={style.image} src={props.image} alt={props.name} />
            <h3 className={style.desc}>{props.desc}</h3>
            <p className={style.sexo}>{props.value}</p>
            <div style={{display: "flex", alignItems: "center", gap: "0.5vw"}}>
                {props.state === "Alive" ? ball("green") : props.state === "Dead" ? ball("red") : ball("yellow")}
                <p className={style.estado}>{props.state}</p>
            </div>
        </div>
    )
}