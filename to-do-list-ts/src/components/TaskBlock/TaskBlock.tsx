import { FC } from "react";
import styles from "./TaskBlock.module.css";

interface TaskBlockProps {
  text: string;
  onClick: React.MouseEventHandler;
  completed: boolean;
  onChange: React.ChangeEventHandler;
}

const TaskBlock: FC<TaskBlockProps> = ({
  text,
  onClick,
  completed,
  onChange,
}) => {
  return (
    <li className={styles.toDoContainer}>
      <div className={styles.toDoContent}>
        <p className={styles.text}>{text}</p>
        <div className={styles.controls}>
          <input type="checkbox" onChange={onChange} checked={completed} />
          <button
            className={`${styles.cross} ${
              completed ? styles.active : styles.inactive
            }`}
            onClick={onClick}
          >
            ❌
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskBlock;
