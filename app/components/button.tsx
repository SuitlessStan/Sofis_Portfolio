import { Button } from "@chakra-ui/react";

type AnimatedButtonProps = {
    title: string,
    className: string,
    height: number,
    width: number
}
export default function AnimatedButton({ title, className, height, width }: AnimatedButtonProps) {
    return (
        <Button width={width} height={height} className={`bg-primary animated-button font-Butler ${className}`} borderRadius={10}>
            {title}
        </Button>
    )
}