// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseSection from "./components/CourseSection";
import TrustedCompanies from "./components/TrustedCompanies";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CourseSection />
        <TrustedCompanies />
      </main>
    </>
  );
}

export default App;
