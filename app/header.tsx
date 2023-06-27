import Image from "next/image"
import Introduction from "./introduction"
import Profile from "./profile"
export default function Header() {
    return (
        <div>
            <Image width={188} height={134} src="/images/butterfly.png" alt="butterfly" />
            <div className="grid md:grid-cols-6 sm:grid-cols-12">
                <Introduction />
                <Profile />
            </div>
        </div>
    )
}