import { FC } from 'react';
import styles from './Input.module.css';

interface InputProps {
  type: string,
  placeholder: string, 
  value: string,
  onChange: React.ChangeEventHandler,
};

const Input: FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input 
    className={styles.input}
    type={type} 
    placeholder={placeholder} 
    value={value}
    onChange={onChange} 
    />
  )
};

export default Input;