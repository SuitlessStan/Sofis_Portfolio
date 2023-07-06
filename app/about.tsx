import { Image, Container, Divider } from "@chakra-ui/react"

export default function About() {
    return (
        <div
            className="bg-primary about-section"
        >
            {/* TODO: ADD IMAGES AFTER CROP */}
            {/* <Image className="float-left relative bottom-10" src="/images/spark.png" alt="spark" /> */}
            <Container maxW={["container.sm", "container.md", "container.lg"]}>
                <div className="grid grid-cols-12">
                    <div className="col-span-6 md:col-span-4">
                        <div className="flex justify-center items-center h-full w-full text-right">
                            <Image className="w-4/5 md:w-4/6 h-full" src="/images/sofi_about_lg.png" alt="sofi_about" />
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-8">
                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-12 md:col-span-4 flex justify-center items-center h-full">
                                <Image className="" src="/images/nice_to_meet_you_lg.png" alt="nice_to_meet_you" />
                            </div>
                            <div className="hidden md:block col-span-8">
                                <Divider className="blue-border" />
                                <span className="font-fieldsDisplay text-xl font-medium">As a technician in audio-visual arts and web designer, I want to make every page a full experience. <br className="hidden md:block" />
                                    <span className="font-bold">Where are you? The internet is too crowded!</span> <br className="hidden md:block" />
                                    With so much content out there, it’s easy to <span className="text-salmon font-bold">
                                        blend in</span>, making it hard to put yourself out  </span>
                            </div>
                            <div className="hidden md:block col-span-12">
                                <span className="font-fieldsDisplay text-xl font-medium">there.  Good user experience and <span className="font-bold">eye-catching</span>, <span className="text-vibrantBlue font-bold">colorful</span> designs can really make stand out, tell a story and give users a genuine, and positive idea of what your brand is all about...  Good news is, I can help you with that! </span>
                                <Divider className="blue-border" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 md:hidden">
                        <Divider className="blue-border" />
                        <div className="mt-4 mb-4 container">
                            <span className="font-fieldsDisplay font-medium text-sm">
                                As a technician in audio-visual arts and web designer, I want to make every page a full experience.
                                <br />
                                <span className="font-bold"> Where are you? The internet is too crowded!</span>With so much content out there, it’s easy to <span className="font-bold">
                                    blend in</span>, making it hard to put yourself out there.  Good user experience and <span className="font-bold">
                                    eye-catching</span>, <span className="text-vibrantBlue font-bold">colorful</span> designs can really make stand out, tell a story and give users a genuine, and positive idea of what your brand is all about...  Good news is, I can help you with that!
                            </span>
                        </div>
                        <Divider className="blue-border" />
                    </div>

                </div>
            </Container>
        </div>
    )
}