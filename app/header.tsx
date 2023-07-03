import Image from "next/image"
import Introduction from "./introduction"
import Profile from "./profile"
export default function Header() {
    return (
        <div>
            <Image width={188} height={134} src="/images/butterfly.png" alt="butterfly" />
            <div className="grid sm:grid-cols-12">
                <div className="col-span-7">
                    <Introduction />
                </div>
                <div className="col-span-5">
                    <Profile />
                </div>
            </div>
        </div>
    )
}