import s from './Header.module.css'

const  Header = () => {
    return(
       <header className={s.header}>
           <div>
               <a href="/">
                <img src="https://footymedia.fun/wp-content/uploads/2022/07/%D0%B8%D1%81%D1%85%D0%BE%D0%B4%D0%BD%D0%B8%D0%BA-%D0%BB%D0%BE%D0%B3%D0%BE-%D0%90%D0%A0%D0%A2.jpg" alt="logo"/>
               </a>
           </div>
       </header>
    );
}

export default Header;