import "bootstrap/dist/css/bootstrap.min.css"
import "./components/css/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App  