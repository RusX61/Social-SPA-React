import s from './Header.module.css'

const  Header = () => {
    return(
       <header className={s.header}>
           <div className={s.logo}>
               <a href="/">

                   <img src="img/header-logo.webp" alt="logo"/>
               </a>
           </div>
           <div className={s.slogan}><span>Meme investigators community</span></div>
           <div className={s.sign}>
               <a href="/" className="btn btn-secondary btn-md active" role="button" aria-pressed="true">Exit</a>
           </div>
       </header>
    );
}

export default Header;