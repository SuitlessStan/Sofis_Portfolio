"use client"
import { Container, Box } from "@chakra-ui/react"
import Navbar from './navbar'
import Header from "./header"
import Panel from "./panel"
import TestNavbar from "./navbar-test"

export default function Home() {
  return (
    <>
      <Box className="bg-primary curved">
        <Navbar />
        <Header />
      </Box>
      <Panel />
    </>
  )
}
