import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <img className="avatar" src="https://github.com/rafael-acerqueira.png" />
          <div className={styles.authorInfo}>
            <strong>Author</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="26 de Janeiro as 08:25" dateTime="2024-01-26 08:25:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
        urabitur aliquam libero condimentum dui dapibus, sed ultricies nulla efficitur. Cras iaculis quam dolor, molestie rutrum enim consequat vitae. Maecenas euismod risus ac convallis pellentesque. Cras vitae quam cursus, condimentum risus eu, vulputate velit. Maecenas sed ullamcorper dui. Nulla condimentum turpis ex, ac ultrices arcu condimentum vel
        </p>
        <p>
          Nullam quis tincidunt urna. Quisque tincidunt gravida nulla, vel tincidunt mi imperdiet sit amet. Vivamus dignissim vehicula odio in semper.
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Let your feedback</strong>

        <textarea placeholder="Left a comment" />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}