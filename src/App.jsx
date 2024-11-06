import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./routes/AppRouter";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
