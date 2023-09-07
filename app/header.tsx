import { Image } from "@chakra-ui/react"
import Introduction from "./introduction"
import Profile from "./profile"
export default function Header() {
    return (
        <div>
            {/* <Image width={188} height={134} src="/images/butterfly.png" alt="butterfly" /> */}
            <div className="grid grid-cols-12">
                {/* <div className="col-span-7">
                    <Introduction />
                </div>
                <div className="col-span-5">
                    <Profile />
                </div> */}
                <div className="col-span-12 md:hidden">
                    <Image src="/images/welcome_text_mobile.png" alt="welcome_text" />
                </div>
            </div>
        </div>
    )
}