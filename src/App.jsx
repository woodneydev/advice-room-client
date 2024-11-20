import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout/PublicLayout";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout/>}>
          <Route path="" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
