import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface postProps{
  author:{
    avatarUrl: string,
    name: string,
    role: string
  },
  content: {
    type: string,
    content: string
  }[],
  publishedAt: Date,
}

export function Post({author,publishedAt, content}:postProps){
  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'",{
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}r</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow} atrás
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line=>{
          if (line.type === 'paragraph'){
            return <p>{line.content}</p>;
          } else if (line.type ==='Link'){
            return <p><a href='#'>{line.content}</a></p>;
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe um comentário</strong>
        <textarea placeholder="Escreva seu comentário" />
        <footer>
            <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
          <Comment/>
      </div>
    </article>
  );
}


