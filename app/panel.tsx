import { Box } from "@chakra-ui/react"
import AnimatedButton from "./components/button"
export default function Panel() {
    return (
        <Box className="bg-secondary curved-top">
            <div className="flex justify-center gap-10">
                <AnimatedButton title="WEB" className="relative lg:bottom-8 lg:right-20 transform rotate-2" width={148.75} height={56.13} />
                <AnimatedButton title="GRAPHIC" className="relative lg:bottom-6" width={192.39} height={48.56} />
            </div>
        </Box>
    )
}