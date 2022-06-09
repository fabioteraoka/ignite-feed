import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
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
    type: 'paragraph'| 'link',
    content: string
  }[],
  publishedAt: Date,
}


export function Post({author,publishedAt, content}:postProps){
  const [comments, setComments] = useState(['Muito bom Devon, parabens!! 👏👏'])
  const [newCommentText, setNewCommentText] = useState('')

  
  function handleCreateNewComments(event: FormEvent){
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
   event.target.setCustomValidity('')
    
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    console.log(event)
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string){
    const commentWithoutDeleteOne = comments.filter(comment =>{
      return comment !== commentToDelete
    })
    setComments(commentWithoutDeleteOne)
  }

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'",{
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const isNewCommentEmpty = newCommentText.length === 0;

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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type ==='link'){
            return <p key={line.content}><a href='#'>{line.content}</a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComments} className={styles.commentForm}>
        <strong>Deixe um comentário</strong>
        <textarea 
          placeholder="Escreva seu comentário"
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}          
          onInvalid={handleNewCommentInvalid}
          required
          />
        <footer>
            <button 
              type="submit"
              disabled={isNewCommentEmpty}
              > 
              Publicar
            </button>
        </footer>
      </form>
      <div className={styles.commentList}>
          {comments.map(comment => {
          return (
            <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
            />)
          })}
      </div>
    </article>
  );
}