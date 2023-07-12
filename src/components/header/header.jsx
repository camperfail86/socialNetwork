import style from './header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <img src="../../../public/img/logo.jpg" alt="Логотип." />
    </header>
  )
}

export default Header;