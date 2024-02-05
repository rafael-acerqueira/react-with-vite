import styles from './Comment.module.css'

import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}) {

  const [likes, setLikes] = useState(0)

  function onLikeComment() {
    setLikes((previousLike) => previousLike  + 1)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/rafael-acerqueira.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Aquino</strong>
              <time title="29 de Janeiro de 2024" dateTime="2024-01-29 10:41">Cerca de 1h atrás</time>
            </div>

            <button onClick={() => onDeleteComment(content)} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={() => onLikeComment(content)}>
            <ThumbsUp />
            Like <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}