import { Box, Container } from '@chakra-ui/react'
import Image from 'next/image'

export default function Profile() {
    return (
        // <Box className="background-image sm:col-span-12 md:col-span-3 mb-5">
        //     <Image src="/images/spark.png" alt="spark" height={96} width={154} className="float-left spark" />
        //     <Image src="/images/cloud.png" alt="cloud" height={85.76} width={143.84} className="float-right cloud" />
        //     <Image src="/images/eyed_flower.png" alt="eyed_flower" height={71.07} width={58.74} className="eyed_flower" />
        //     <Image src="/images/sofi.png" alt="sofi-profile" height={379.43} width={419.5} className="inline-block sofi" />
        //     <Image src="/images/portfolio_text.png" alt="portfolio_text" height={300} width={300} className="float-right portfolio-text" />
        // </Box>
        <div className="flex justify-center items-center sm:col-span-12 md:col-span-3">
            <Container>
                <Image src="/images/groovy_rectangle.png" alt="rectangle" height={245} width={250} className="sm:w-full md:w-96 h-full" />
                <Image src="/images/teasing_frown.png" alt="teasing_frown" height={74.58} width={73.32} className="teasing_frown sm:float-left md:float-right" />
            </Container>
        </div>
    )
}