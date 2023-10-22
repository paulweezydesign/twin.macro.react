import React from "react"
import { Outlet } from "react-router-dom"

export default function KittenLayout() {
  return (
    <section>
      <main>
        <Outlet />
      </main>
    </section>
  )
}
