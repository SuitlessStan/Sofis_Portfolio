import { Button } from "@chakra-ui/react";

type AnimatedButtonProps = {
    title: string,
    className: string,
    height: number,
    width: number
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export default function AnimatedButton({ title, className, height, width, onClick }: AnimatedButtonProps) {
    return (
        <Button width={width} height={height} className={`bg-primary animated-button ${className}`} onClick={onClick}>
            {title}
        </Button>
    )
}