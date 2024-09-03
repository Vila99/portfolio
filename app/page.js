import MainPage from "./components/MainPage.js"
import Content from "./components/ContentPage"
import React from "react";
import "./globals.css"

export default function Home() {
  return (
    <div className="bg-main">
      <MainPage/>
      <Content/>
    </div>
  );
}
