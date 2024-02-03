import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import PostJob from './components/PostJob/PostJob'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-job" element={<PostJob />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
