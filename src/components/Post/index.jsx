import styles from './Post.module.css';
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';
import PropTypes from 'prop-types';
import { format, formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'

export function Post({ author, content, publishedAt }) {
  const { avatarUrl, name, role } = author;
  
  const formattedDateTitle = format(publishedAt, "LLLL d 'at' HH:mm", { locale: enUS })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: enUS, addSuffix: true })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time title={formattedDateTitle} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
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

Post.propTypes = {
  author: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }),
  content: PropTypes.array.isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired
}