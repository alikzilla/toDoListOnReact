import { FC } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';

const Header: FC = ({}) => {
  return (
    <header className={styles.header}>
      <Logo />
      <p>To-Do App</p>
    </header>
  )
}

export default Header;