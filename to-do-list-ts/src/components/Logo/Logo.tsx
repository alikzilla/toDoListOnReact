import { FC } from 'react'
import styles from './Logo.module.css'

const Logo: FC = ({}) => {
  return (
    <img className={styles.img} src="./4.png" alt="logo" />
  )
}

export default Logo;