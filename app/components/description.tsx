import { Text, Stack, Container } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

type DescriptionProps = {
    heading: string;
    spanText: string;
    spanColor?: string;
    leadingText: string;
}

export default function Description(props: DescriptionProps) {

    const [output, setOutput] = useState<(string | JSX.Element)[]>([])

    useEffect(() => {
        const wordMatch = (word: string, str: string) => {
            let words = str.split(" ")
            for (let i = 0; i < words.length; i++) {
                if (words[i] === word) {
                    return true
                }
            }
            return false
        };

        let splitText = props.leadingText.split(" ")
        let outputArray: (string | JSX.Element)[] = splitText.map((word, i) => {
            if (wordMatch(word, props.spanText)) {
                return <React.Fragment key={word + i}>{<Text as="span" color={props.spanColor}>{word + " "}</Text>}</React.Fragment>
            }
            return word + " "
        })

        setOutput(outputArray)

        return () => {
            setOutput([])
        }
    }, [props.leadingText, props.spanText, props.spanColor])

    return (
        <Container className="" maxW={["container.sm", "container.lg"]} height={249}>
            <Stack gap={0}>
                <Text className="font-Butler" as="span" fontSize={[33]} fontWeight={900}>
                    {props.heading}
                </Text >
                <Text className="font-Butler pl-3" fontSize={[15, 20]}>
                    {output}
                </Text>
            </Stack>
            <Stack className="mt-5 md:font-QuicheFlare lg:font-QuicheFlare sm:font-fieldsDisplay sm:text-xl md:text-lg" fontSize={[13, 18]} >
                <Text fontWeight={500} fontSize={[13, 22]}>
                    As a technician in audio-visual arts and web designer, I want to make every page a full <b className="font-black">experience.</b>
                </Text>
                <Text fontWeight={500} fontSize={[13, 22]} >
                    <i>Where are you? The internet is too crowded!</i>
                </Text>
                <Text fontWeight={700} fontSize={[13, 18]}>
                    With so much content out there, it’s easy to <del>blend in</del>, making it hard to put yourself out there. Good user experience and eye-catching, <span className="text-orange font-extrabold">colorful</span> designs can really make <b>stand out</b>, tell a story and give users a genuine, and positive idea of what your brand is all about...
                </Text>
                <Text fontWeight={800} fontSize={[13, 18]}>
                    Good news is, I can help you with that!
                </Text>
            </Stack>
        </Container>
    )
}