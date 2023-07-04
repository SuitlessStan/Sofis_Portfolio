import { Box } from "@chakra-ui/react"
import AnimatedButton from "./components/button"
import Description from "./components/description"
import { useState, useEffect } from "react"
export default function Panel() {
    const [activeSection, setActiveSection] = useState('section1')
    const [showDescription, setShowDescription] = useState(false)

    const handleButtonClick = (section) => {
        setShowDescription(false)
        setTimeout(() => {
            setActiveSection(section)
            setShowDescription(true)
        }, 700)
    }

    useEffect(() => {
        setShowDescription(true)
    }, [])
    
    return (
        <Box className="curved-top">
            <div className="mb-3">
                <div className="flex justify-center gap-10">
                    <AnimatedButton title="WEB" width={[97.55, 148.75]} height={[36.81, 56.13]} fontSize={[12, 20.57]} onClick={() => handleButtonClick("section1")} />
                    <AnimatedButton title="GRAPHIC" width={[130.87, 192.39]} height={[33.14, 48.56]} fontSize={[12, 17.44]} onClick={() => handleButtonClick("section2")} />
                </div>
            </div>
            <div className="pr-1 pl-1">
                {activeSection === "section1" && (
                    <Description
                        className={`section ${showDescription ? "active" : "inactive"}`}
                        heading="WEB DESIGN"
                        spanText="making the internet"
                        leadingText="making the internet pretty"
                        spanColor="#ed6a5a"
                    />
                )}
                {activeSection === "section2" && (
                    <Description
                        className={`section ${showDescription ? "active" : "inactive"}`}
                        heading="GRAPHIC DESIGN"
                        spanText="aesthetic"
                        leadingText="go aesthetic or go home"
                        spanColor="#169873"
                    />
                )}
            </div>
        </Box>
    )
}