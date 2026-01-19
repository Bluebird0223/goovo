"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavbarProps {
    isLoggedIn: boolean;
}

const goovoFonts = [
    'Playfair Display',
    'Montserrat',
    'Rock Salt',
    'Pacifico',
    'Caveat',
    'Amatic SC',
    'Schoolbell',
    'Doto',
];

const goovoLanguages = [
    { part1: 'Goo', part2: 'vo', lang: 'English' },
    { part1: 'गू', part2: 'वो', lang: 'Hindi' },
    { part1: 'グー', part2: 'ヴォ', lang: 'Japanese' },
    { part1: '구', part2: '보', lang: 'Korean' },
    { part1: 'Гу', part2: 'во', lang: 'Russian' },
    { part1: 'جو', part2: 'فو', lang: 'Arabic' },
    { part1: 'Gu', part2: 'vo', lang: 'Spanish' },
    { part1: 'Gou', part2: 'vo', lang: 'French' },
    { part1: 'Gu', part2: 'wo', lang: 'German' },
    { part1: 'গু', part2: 'ৱ', lang: 'Assamese' },
    { part1: 'গু', part2: 'ভ', lang: 'Bengali' },
    { part1: 'गु', part2: 'ब', lang: 'Bodo' },
    { part1: 'ગુ', part2: 'વ', lang: 'Gujarati' },
    { part1: 'ಗು', part2: 'ವ', lang: 'Kannada' },
    { part1: 'गु', part2: 'व', lang: 'Kashmiri' },
    { part1: 'ഗു', part2: 'വ', lang: 'Malayalam' },
    { part1: 'ଗୁ', part2: 'ଵ', lang: 'Odia' },
    { part1: 'ਗੁ', part2: 'ਵ', lang: 'Punjabi' },
    { part1: 'கு', part2: 'வ', lang: 'Tamil' },
    { part1: 'గు', part2: 'వ', lang: 'Telugu' },
    { part1: 'گو', part2: 'وو', lang: 'Urdu' }
];

const Navbar = ({ isLoggedIn }: NavbarProps) => {
    const pathname = usePathname();
    const [langIndex, setLangIndex] = useState(0);
    const [fontIndex, setFontIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            // Start exit animation
            setIsExiting(true);

            // Wait for exit animation to finish (400ms is the duration in CSS)
            setTimeout(() => {
                setLangIndex((prev) => (prev + 1) % goovoLanguages.length);
                setFontIndex((prev) => (prev + 1) % goovoFonts.length);
                setIsExiting(false);
            }, 400);

        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const currentLang = goovoLanguages[langIndex];
    const currentFont = goovoFonts[fontIndex];

    const navItems = isLoggedIn
        ? [
            {
                name: "Create Plan", href: "/create-plan", icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-diamond-plus-icon lucide-diamond-plus">
                        <path d="M12 8v8" />
                        <path
                            d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
                        <path d="M8 12h8" />
                    </svg>
                )
            },
            {
                name: "Message", href: "/message", icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-send-icon lucide-send">
                        <path
                            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                        <path d="m21.854 2.147-10.94 10.939" />
                    </svg>
                )
            },
            {
                name: "Explore", href: "/explore", icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-compass-icon lucide-compass">
                        <path
                            d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                )
            },
            {
                name: "Profile", href: "/profile", icon: (
                    <Image
                        className="rounded-full font-medium border border-[#90EE90] bg-white shrink-0 min-w-[24px] min-h-[24px]"
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        width={24}
                        height={24}
                        alt="profile"
                    />
                )
            }
        ]
        : [];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 basis-36">
                    <Link href="/" className="group" title={`"Goovo" in ${currentLang.lang}`}>
                        <span
                            className="text-2xl font-bold goovo-brand inline-flex"
                            style={{ fontFamily: `'${currentFont}', sans-serif` }}
                        >
                            <span
                                className={`goovo-part1 transition-all duration-500 text-white`}
                                style={{
                                    animation: isExiting ? 'exitUp 0.4s ease-in forwards' : 'floatUp 0.5s ease-out forwards'
                                }}
                            >
                                {currentLang.part1}
                            </span>
                            <span
                                className={`goovo-part2 transition-all duration-500 text-[#90ee90]`}
                                style={{
                                    animation: isExiting ? 'exitDown 0.4s ease-in forwards' : 'floatDown 0.5s ease-out forwards'
                                }}
                            >
                                {currentLang.part2}
                            </span>
                        </span>
                    </Link>
                </div>

                <div className="flex items-center space-x-6 flex-grow justify-end md:justify-between ml-8">
                    {isLoggedIn && (
                        <div className="hidden md:flex items-center gap-8 flex-grow max-w-md">
                            <input
                                type="text"
                                placeholder="Start exploring..."
                                className="w-full bg-transparent text-[#f5f5f0] placeholder-gray-500 outline-none border border-zinc-800 focus:border-[#90ee90] px-6 py-2 rounded-xl transition-all"
                            />
                        </div>
                    )}

                    {isLoggedIn ? (
                        <div className="flex items-center gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`rounded-xl transition-all duration-200 ${pathname === item.href
                                        ? "text-[#90ee90] bg-green-900/10"
                                        : "text-gray-400 hover:text-[#90ee90] hover:bg-white/5"
                                        }`}
                                    title={item.name}
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="px-4 py-2 text-sm font-medium text-[#f5f5f0] hover:text-[#90ee90] transition-colors"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                className="px-5 py-2.5 text-sm font-bold text-black bg-[#90ee90] hover:bg-green-600 rounded transition-all shadow-lg shadow-green-500/20 active:scale-95"
                            >
                                Join Goovo
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;