import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/fabioteraoka.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fabio Teraoka</strong>
              <time title="03 de junho as 16:41" dateTime="2022-05-11 05:45:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabens!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
