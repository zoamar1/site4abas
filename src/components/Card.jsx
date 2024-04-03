import style from './Card.module.css'

export default function Card(props){
    return(
    <div className={style.card}>
        <h2 className={style.title}>{props.title}</h2>
        <div className={style.divImage}>
        <img className={style.image} src={props.source} alt={props.title} width={props.width} height={props.height}/>
        </div>
        <p className={style.description}>{props.desc}</p>
    </div>
    )
}