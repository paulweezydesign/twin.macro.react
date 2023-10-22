import React from "react"
import { Global } from "@emotion/react"
import { GlobalStyles } from "twin.macro"
import { Outlet, Link } from "react-router-dom"
import { stylesBase, ThemeToggle, Logos } from "./components"

const App = () => (
  <div>
    <GlobalStyles />
    <Global styles={stylesBase} />
    <nav>
      <Link to="/">Home</Link>
      <Link to="/kittens">Kittens</Link>
      <ThemeToggle />
    </nav>
    <div tw="h-screen flex flex-col justify-center items-center">
      <Outlet />
    </div>
  </div>
)

export default App
