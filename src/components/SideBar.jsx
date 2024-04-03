import style from './SideBar.module.css'


export default function SideBar() {
    return (
        <nav className={style.sidebar}>
            <div className={style.logoContainer}>
                <img className={style.logo} src={`https://i.pinimg.com/originals/42/ff/a2/42ffa29da7b397d19a93464e909e0f65.png`} alt="Logo" width={180} height={180} />
            </div>
            <div className={style.pagesContainer}>
                <h2 className={style.item}><a href={'/'}>Technologies</a></h2>
                <h2 className={style.item}><a href={'/media'}>Media</a></h2>
                <h2 className={style.item}><a href={'/contact'}>Contact</a></h2>
                <h2 className={style.item}><a href={'/rm'}>Rick and Morty</a></h2>
            </div>
        </nav>
    )
}