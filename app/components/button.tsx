import { Button } from "@chakra-ui/react";

type AnimatedButtonProps = {
    title: string,
    className?: string,
    height: number[],
    width: number[],
    fontSize?: number[]
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export default function AnimatedButton({ title, className, height, width, onClick, fontSize }: AnimatedButtonProps) {
    return (
        <Button width={width} fontSize={fontSize} height={height} className={`bg-primary animated-button ${className} sm:relative sm:bottom-5`} onClick={onClick}>
            {title}
        </Button>
    )
}