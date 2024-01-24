import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'

function App() {
  return (
    <>
    <Header/>
    <Post
      author="Eu"
      content="Description comes here"
    />
    </>
  )
}

export { App }