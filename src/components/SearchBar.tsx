import styles from "./SearchBar.module.css";
import { PlusCircle } from "phosphor-react";

export function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={20} />
      </button>
    </div>
  );
}
