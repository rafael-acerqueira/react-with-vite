import styles from './Comment.module.css'

import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'

export function Comment() {
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

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Perfect! Good job!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}