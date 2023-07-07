import { Button, Text, Stack, Container } from "@chakra-ui/react"
import React from "react"

type DescriptionProps = {
    heading: string;
    spanColor?: string;
    leadingText: string;
    className?: string;
    style?: object;
}

export default function Description(props: DescriptionProps) {
    return (
        <Container className={props.className} style={props.style} maxW={["container.sm", "container.lg"]} height={249}>
            <div className="flex flex-col">
                <Text className="font-Butler" as="span" fontSize={[18, 28]} fontWeight={900}>
                    {props.heading}
                </Text >
                <Text className="font-Butler pl-3" as="span" fontSize={[15, 20]}>
                    {props.leadingText}
                </Text>
            </div>
            <div>
                <span className="font-fieldsDisplay text-sm md:text-lg font-medium">
                    As a technician in audio-visual arts and web designer,
                    <br className="hidden sm:block md:hidden lg:hidden" /> I want to make every page a
                    <br className="hidden md:block" /> full <span className="font-black"> experience.</span>
                </span>
                <br className="md:hidden" />
                <br className="hidden md:block" />
                <Text fontWeight={500} fontSize={[13, 18]} className="not-italic font-extrabold md:font-normal md:italic">
                    Where are you? The internet is too crowded!
                </Text>
                <br className="md:hidden" />
                <Text fontWeight={500} fontSize={[13, 18]}>
                    With so much content out there, it’s easy to <del>blend in</del>, making it hard to put yourself out there. Good user experience and eye-catching, <span className="text-orange font-extrabold">colorful</span> designs can really make <b>stand out</b>, tell a story and give users a genuine, and positive idea of what your brand is all about...
                </Text>
                <Text fontWeight={800} fontSize={[13, 22]}>
                    Good news is, I can help you with that!
                </Text>
            </div>
            <div className="flex justify-center">
                <Button marginTop={["2rem", "3.5rem"]} width={[105, 260]} height={[22.21, 55]} fontSize={[9.22, 20]} className="check_button font-Butler">
                    CHECK IT OUT
                </Button>
            </div>
        </Container>
    )
}