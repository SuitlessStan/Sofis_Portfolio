import { Box } from "@chakra-ui/react"
import AnimatedButton from "./components/button"
import Description from "./components/description"
import { useState } from "react"
export default function Panel() {
    const [clicked, setClicked] = useState(false)

    return (
        <Box className="bg-secondary curved-top">
            <div className="flex justify-center gap-10">
                <AnimatedButton title="WEB" className="relative sm:bottom-8" width={148.75} height={56.13} onClick={() => setClicked(!clicked)} />
                <AnimatedButton title="GRAPHIC" className="relative sm:bottom-8" width={192.39} height={48.56} onClick={() => setClicked(!clicked)} />
            </div>
            {clicked == true ? <Description heading="WEB DESIGN" spanText="making the internet" leadingText="making the internet pretty" spanColor="#ed6a5a" /> : <Description heading="GRAPHIC DESIGN" spanText="aesthetic" leadingText="go aesthetic or go home" spanColor="#169873" />}
        </Box>
    )
}