import React from "react"
import ReactDOM from "react-dom"

import App from "./app"
import { ThemeProvider } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import KittenLayout from "./routes/KittenLayout"
import Kittens from "./routes/Kittens"
const rootElement = document.getElementById("root")

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="kittens" element={<KittenLayout />}>
            <Route index element={<Kittens />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  rootElement
)
