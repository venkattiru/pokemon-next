'use client'

import { ThemeContext } from "../context/themeproviders";
import { usePathname } from 'next/navigation'
import {  useState } from "react";
import { cart, home, profile, search } from "@/utils/svg";
import Link from "next/link";


export default function PokeLayout({children}){ 
    const [theme, setTheme] = useState('light');
    const pathName = usePathname();

    const handleTheme = () => {
        if(theme === 'light') {
            setTheme('dark')
            document.documentElement.classList.add('dark')
        } else {
           setTheme('light')
            document.documentElement.classList.remove('dark');
        }
        
    }
    return( 
        <ThemeContext.Provider value ={theme}> 
        {children}
        <div className="flex justify-center">
            <aside className="fixed md:right-0 bg-[#cac5d6] p-1 md:top-8 dark:bg-yellow-900 rounded-md flex md:flex-col bottom-2 md:bottom-auto flex-row justify-evenly">
                <Link href={'/pokemon'}>
                <div className="p-2 transition duration-500 md:hover:my-2 md:hover:scale-110" title="Home">
                {home}
                {pathName === '/pokemon' ? <span class="w-1 h-1 bg-[#505085] dark:bg-[#fffff0] absolute rounded-full translate-x-[10px]" /> : null}
                </div>
                </Link>
                <div className="p-2 transition duration-500 md:hover:my-2 md:hover:scale-110" title="Search">
                {search}
                </div>
                <Link href={'/pokemon/profile'}>
                <div className="p-2 transition duration-500 md:hover:my-2 md:hover:scale-110" title="Profile">
                {profile}
                {pathName === '/pokemon/profile' ? <span class="w-1 h-1 bg-[#505085] dark:bg-[#fffff0] absolute rounded-full translate-x-[10px]" /> : null}
                </div>
                </Link>
            <div
          aria-label="Toggle Dark Mode"
          type="button"
          className="p-2 h-10 transition duration-500 lg:transform-none md:relative md:left-0 border-0 md:hover:my-2 md:hover:scale-110"
          onClick={handleTheme}
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="text-gray-800 dark:text-gray-200"
              height={30}
              width={30}
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
            
        </div>
        <Link href={'/pokemon/pokedox'}>
        <div className="p-2 transition duration-500 md:hover:my-2 md:hover:scale-110" title="Cart">
                {cart}
                {pathName === '/pokemon/pokedox' ? <span class="w-1 h-1 bg-[#505085] dark:bg-[#fffff0] absolute rounded-full translate-x-[10px]" /> : null}
        </div>
        </Link>
        </aside>
        </div>
        </ThemeContext.Provider> 
        
    )
}