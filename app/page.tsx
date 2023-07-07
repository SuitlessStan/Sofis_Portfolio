"use client"
import { Box } from "@chakra-ui/react"
import Navbar from './navbar'
import Header from "./header"
import Panel from "./panel"
import About from "./about"
import AnimatedButton from "./components/button"

export default function Home() {
  return (
    <>
      <Box className="bg-primary curved">
        <Navbar />
        <Header />
        <div className="flex justify-center gap-10 relative z-50">
          <AnimatedButton className="relative bottom-8 md:bottom-0 web-button" title="WEB" width={[97.55, 148.75]} height={[36.81, 56.13]} fontSize={[12, 20.57]} />
          <AnimatedButton className="relative bottom-8 md:bottom-0 graphic-button" title="GRAPHIC" width={[130.87, 192.39]} height={[33.14, 48.56]} fontSize={[12, 17.44]} />
        </div>
      </Box>
      <Panel />
      <About />
    </>
  )
}
