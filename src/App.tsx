import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Homepage from "./page/Homepage"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
