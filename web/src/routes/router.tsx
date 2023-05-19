import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Paths } from 'src/data/Enums'
import Home from 'src/pages/Home'
import About from 'src/pages/About'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.HOME} element={<Home/>} />
        <Route path={Paths.ABOUT} element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}
