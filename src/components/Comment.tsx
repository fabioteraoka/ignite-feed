import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment:string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeComment, setLikeComment] = useState(0);
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeComment((state)=>{
      return state +1 
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/fabioteraoka.png" alt=""/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fabio Teraoka</strong>
              <time title="03 de junho as 16:41" dateTime="2022-05-11 05:45:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={handleDeleteComment} 
              title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeComment}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
