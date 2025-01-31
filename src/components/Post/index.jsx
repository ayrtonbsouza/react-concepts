import styles from './Post.module.css';
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/ayrtonbsouza.png" />
          <div className={styles.authorInfo}>
            <strong>Ayrton Souza</strong>
            <span>Software Engineer</span>
          </div>
        </div>
        <time title="26 de Janeiro às 16:59h" dateTime="2025-01-26 16:59:30">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Ignite, trilha da Rocketseat. O nome do projeto é Feed 🚀</p>
        <p>
          👉{' '}
          <a href="#">
            jane.design/doctorcare
          </a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#ignite</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Leave your comment</strong>
        <textarea placeholder="Leave your comment" />
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