import './global.css'
import  styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './Post'

function App() {
  return (
    <>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <main>
        <Post
          author="Eu"
          content="Description comes here"
        />
      </main>
    </div>
    </>
  )
}

export { App }