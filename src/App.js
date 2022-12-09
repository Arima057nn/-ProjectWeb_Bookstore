import { ThemeProvider } from "@mui/system";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/home";
import Books from "./pages/books";
function App() {
  useEffect(() => {
    document.title = "React Material UI - HOME";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/books" exact element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
