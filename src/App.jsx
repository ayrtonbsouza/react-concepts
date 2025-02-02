import { Header, Post, Sidebar } from "./components"
import styles from './App.module.css'
import './styles/global.css'
import {} from "./components/Post"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ayrtonbsouza.png',
      name: 'Ayrton Souza',
      role: 'Software Engineer'
    },
    content : [
      { type: 'paragraph', content: 'Sup, guys! 👋🏼' },
      { type: 'paragraph', content: "I just uploaded a new project to my porfolio. It's a project that I developed on Ignite. One of the Rocketseat trails. The project name is Feed" },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-01-26 16:59:30')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Software Engineer'
    },
    content : [
      { type: 'paragraph', content: 'Sup, guys! 👋🏼' },
      { type: 'paragraph', content: "I just uploaded a new project to my porfolio. It's a project that I developed on Ignite. One of the Rocketseat trails. The project name is Feed" },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-01-26 16:59:30')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          }) }
        </main>
      </div>
    </div>
  )
}