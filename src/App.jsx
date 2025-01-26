import { Header, Post, Sidebar } from "./components"
import styles from './App.module.css'
import './styles/global.css'
import {} from "./components/Post"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}