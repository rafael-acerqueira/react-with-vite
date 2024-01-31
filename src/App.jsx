import './global.css'
import  styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

function App() {
  return (
    <>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <main>
        <Post
          author="Eu"
          avatarUrl="https://github.com/rafael-acerqueira.png"
          role="Web Developer"
          content="Description comes here"
          publishedAt={new Date("2024-01-31 08:25:00")}
        />
      </main>
    </div>
    </>
  )
}

export { App }