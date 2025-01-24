import { Header, Sidebar } from "./components"
import styles from './App.module.css'
import './styles/global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>Main</main>
      </div>
    </div>
  )
}