import NikeLogo from "../assets/nike-logo.svg?react";

import { RxHamburgerMenu } from "react-icons/rx";


export default function Nav() {

    const ROUTES = ["Home", "Shop", "About", "Contact"]

    return (
        <>
            <nav className="flex flex-wrap items-center justify-between">

                {/* Logo */}
                <a href="#">
                    <NikeLogo className="w-12 h-12" />
                </a>

                {/* Buger Button  */}
                <button className="hover:bg-gray-200 rounded-md p-2 focus:ring-2 focus:ring-gray-200">
                    <RxHamburgerMenu size={25} />
                </button>

                {/* Mobile Menu */}
                <div className='w-full'>
                    <ul className="rounded-lg border  border-gray-100 bg-gray-50 p-4 text-lg">
                        {ROUTES.map((route, i) => {
                            return (
                                <li className={`px-3 py-2 cursor-pointer ${i === 0 ? "bg-blue-600 text-white rounded-lg" : "hover:bg-gray-100"}`} key={route}>
                                    {route}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav >

        </>
    )
}