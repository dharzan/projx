import Link from "next/link";

import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai"; // Menu icon

import { BiBookContent, BiHomeCircle, BiTask } from "react-icons/bi"; // Icons for routes

const NavigationMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        console.log("button clicked");

        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="text-2xl p-2">
                <AiOutlineMenu className="w-6 h-6" />
            </button>

            {isOpen && (
                <div className="absolute mt-2 flex flex-col space-y-2 bg-white text-black p-2 rounded shadow w-20 sm:w-24 z-50">
                    <Link legacyBehavior href="/landingPage">
                        <a
                            className="flex justify-center p-2 hover:bg-gray-200 rounded"
                            onClick={() => setIsOpen(false)}
                        >
                            <BiHomeCircle className="w-6 h-6" />
                        </a>
                    </Link>

                    <Link legacyBehavior href="/taskManager">
                        <a
                            className="flex justify-center p-2 hover:bg-gray-200 rounded"
                            onClick={() => setIsOpen(false)}
                        >
                            <BiTask className="w-6 h-6" />
                        </a>
                    </Link>

                    <Link legacyBehavior href="/resumeOptimizer">
                        <a
                            className="flex justify-center p-2 hover:bg-gray-200 rounded"
                            onClick={() => setIsOpen(false)}
                        >
                            <BiBookContent className="w-6 h-6" />
                        </a>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default NavigationMenu;
