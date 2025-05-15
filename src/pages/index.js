'use client'

import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
import Model from "./Components/Model";
import * as Sentry from "@sentry/nextjs";
import Features from "./Components/Features";


function App() {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </main>
 )
}

export default App