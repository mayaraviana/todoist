import styles from "./TasksList.module.css";
import { Clipboard, Trash } from "phosphor-react";

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
        <div className={styles.task}>
          <input
            type="checkbox"
            name="checkboxid"
            id=""
            className={styles.checkbox}
          />
          <p className={styles.taskTitle}>
            Essa é uma tarefa exemploEssa é uma tarefa exemploEssa é uma tarefa
            exemploEssa é uma tarefa exemploEssa é uma tarefa exemploEssa é uma
            tarefa exemploEssa é uma tarefa exemploEssa é uma tarefa exemploEssa
            é uma tarefa exemplo
          </p>
          <button>
            <Trash size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
