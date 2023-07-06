import { Box, Image } from "@chakra-ui/react"
import AnimatedButton from "./components/button"
import Description from "./components/description"

export default function Panel() {
    return (
        <>
            {/* <Image src="/images/small_flower.png" alt="small_flower" className="float-left relative bottom-5" width={[]} /> */}
            <Box className="relative">
                <div className="curved-top">
                    <Description heading="WEB DESIGN" leadingText="making the internet pretty" />
                </div>
            </Box>
            {/* <Image className="sm:float-left md:float-right relative bottom-10" alt="vector" src="/images/Vector.png" /> */}
        </>
    )
}