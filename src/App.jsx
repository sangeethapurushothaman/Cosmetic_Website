import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./pages/SinglePage";
import Header from "./components/Header"
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<SinglePage />} />





        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
