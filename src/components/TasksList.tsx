import styles from "./TasksList.module.css";
import { Clipboard } from "phosphor-react";

export function TaksList() {
  return (
    <div className={styles.taskslist}>
      <div className={styles.listheader}>
        <p>
          Tarefas criadas<span className={styles.taskcount}>0</span>
        </p>
        <p>
          Concluídas<span className={styles.taskcount}>0</span>
        </p>
      </div>
      <div className={styles.tasksIsEmpty}>
        <Clipboard size={56} />
        <p className={styles.tasksEmptyFirstParagraph}>
          Você ainda não tem tarefas cadastradas
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
