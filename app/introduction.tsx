import { Box, Container } from "@chakra-ui/react"
import Image from "next/image"

export default function Introduction() {
    return (
        <Box className="sm:col-span-12 md:col-span-3">
            <Container>
                <div className="hidden sm:hidden md:block">
                    <div className="text-center">
                        <span className="font-Sniglet text-3xl outlined first-line">HELLO! I&apos;M</span>
                    </div>
                    <div className="flex justify-center items-center mt-3">
                        <Image src="/images/Soft_Star.png" alt="soft star" className="mr-4" width={22} height={22} />
                        <span className="font-Sniglet text-accent text-3xl outlined second-line">
                            S
                        </span>
                        <Image src="/images/o.png" alt="o" width={72} height={77} />
                        <span className="font-Sniglet text-accent text-3xl outlined second-line">FI</span>
                        <Image src="/images/Soft_Star.png" className="ml-4" alt="soft star" width={22} height={22} />
                    </div>
                </div>
                <div className="sm:block md:hidden flex flex-col items-center">
                    {/* TODO: REPLACE BY ACTUAL TEXT */}
                    <Image src="/images/welcome_text.png" alt="welcome_text" height={72} width={235} />
                    <Image src="/images/my_portfolio_text.png" alt="my_portfolio_text" height={20} width={243} />
                </div>
                <span className="font-Sniglet outlined text-center flex justify-center mt-5 third-line sm:text-xs md:text-2xl lg:text-2xl">
                    SCROLL DOWN TO EXPLORE MY WORK
                </span>
            </Container>
            <Image className="float-right butterfly" src="/images/butterfly_1.png" alt="butterfly" width={79} height={70} />
        </Box>
    )
}