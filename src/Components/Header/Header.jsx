import s from './Header.module.css'
import Nav from "./Nav/Nav";

const  Header = () => {
    return(
       <header className={s.header}>
           <div className={s.logo}>
               <a href="/">

                   <img src="img/header-logo.webp" alt="logo"/>
               </a>
           </div>
           <div className={s.nav}><Nav/></div>
       </header>
    );
}

export default Header;