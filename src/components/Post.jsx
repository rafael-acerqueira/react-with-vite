import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({
  author,
  avatarUrl,
  role,
  content,
  publishedAt
}) {

  const [comments, setComment] = useState([])
  const [newCommentText, setNewCommentText] = useState('')

  const isNewCommentEmpty = newCommentText.length == 0

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event) {
    event.preventDefault()
    setComment([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(content) {
    const newComments = comments.filter(comment => comment != content)
    setComment(newComments)
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar src={avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow
        }</time>
      </header>

      <div className={styles.content}>{content}</div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Let your feedback</strong>

        <textarea
          placeholder="Left a comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          name="comment"
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publish
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment, index) => (
          <Comment
            key={index}
            content={comment}
            onDeleteComment={deleteComment} />
          ))
        }
      </div>
    </article>
  )
}