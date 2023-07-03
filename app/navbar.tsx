import { useState } from 'react'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className="">
            <nav className="hidden md:block text-2xl pt-5">
                <ul className="flex flex-wrap gap-x-4 font-climateCrisis text-idk justify-center">
                    <li className="hover:text-grey">
                        <a href="#">HOME</a>
                    </li>
                    <li className="hover:text-grey">
                        <a href="#">WEB</a>
                    </li>
                    <li className="hover:text-grey">
                        <a href="#">GRAPHIC</a>
                    </li>
                    <li className="hover:text-grey">
                        <a href="#">ABOUT</a>
                    </li>
                    <li className="hover:text-grey">
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
            </nav>
            <div className="float-right p-5 items-center md:hidden">
                <button
                    type="button"
                    className="text-3xl text-grey focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <svg width="22" height="20" viewBox="0 0 29 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3L26 34M26 3L3 34" stroke="#272727" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    ) : (
                        <div className="burger-menu">
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.62885 1.70844H20.7212M1.62885 8.79109H20.7212M1.62885 15.8737H20.7212" stroke="#272727" strokeWidth="2.42471" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    )}
                </button>
            </div>
        </div>
    )
}