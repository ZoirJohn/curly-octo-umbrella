import logo from '../../img/logo.svg';
import styles from './Header.module.css';

let navArray = ['fresh', 'healthy', 'energy', 'high quality', 'eco friendly'];

const Header = () => {
        return <header className={styles.header}>
                <div className={styles.logo}>
                        <a href="#">
                                <img src={logo} alt='' className='' />
                                Veggies
                                <ul className={styles.logo__box}>
                                        <li className={styles.logo__item}></li>
                                        <li className={styles.logo__item}></li>
                                        <li className={styles.logo__item}></li>
                                        <li className={styles.logo__item}></li>
                                </ul>
                        </a>

                </div>
                <nav className={styles.nav}>
                        <ul className={styles.nav__list}>
                                {navArray.map((item) => {
                                        return <li className={styles.nav__item}>
                                                <a href='' className={styles.nav__link}>{item}</a>
                                        </li>;
                                })}

                        </ul>
                </nav>
        </header>;
};

export default Header;