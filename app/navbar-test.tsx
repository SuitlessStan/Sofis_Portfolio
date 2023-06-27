import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="pt-5 text-2xl text-center flex justify-center container:md">
            {/* Normal Navbar */}
            <ul className="sm:hidden flex-wrap gap-x-4 font-climateCrisis text-idk justify-center">
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

            {/* Burger Menu */}
            <div className="flex justify-between items-center sm:hidden">
                <button
                    type="button"
                    className="text-3xl text-grey focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Burger Menu Items */}
            {isOpen && (
                <ul className="md:hidden flex flex-col gap-y-4 font-climateCrisis text-idk mt-4">
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
            )}
        </nav>
    );
}
