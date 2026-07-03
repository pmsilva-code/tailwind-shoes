import NikeLogo from "../assets/nike-logo.svg?react";

import { RxHamburgerMenu } from "react-icons/rx";


export default function Nav() {
    return (
        <>
            <nav className=" flex items-center justify-between">

                {/* Logo */}
                <a href="#">
                    <NikeLogo className="w-12 h-12" />
                </a>

                {/* Buger Button  */}
                <button className="hover:bg-gray-200 rounded-md p-2 focus:ring-2 focus:ring-gray-200">
                    <RxHamburgerMenu size={25} />
                </button>
            </nav>
        </>
    )
}