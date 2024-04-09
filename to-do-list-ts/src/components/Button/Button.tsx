import React, { FC } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  onClick: React.MouseEventHandler,
  label: string,
}

const Button: FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className={styles.button} onClick={onClick}>{label}</button>
  )
};

export default Button;