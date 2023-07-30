'use client'
import { detecDevice } from "@/utils/utility";
import { ThemeContext } from "../themeproviders";
import {  useState } from "react";


export default function PokeLayout({children}){ 
    const [theme, setTheme] = useState('light');
  

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
                <div className="p-2 hover:my-2 hover:scale-125" title="Home">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24" strokeWidth="1.5" stroke="currentColor" className="dark:text-gray-200 w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
</svg>

                </div>
                <div className="p-2 hover:my-2 hover:scale-125" title="Search">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" stroke="currentColor" strokeWidth="0.5"  fill= "currentColor" className="dark:text-gray-200 w-6">
<path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
</svg>
                </div>
                <div className="p-2 hover:my-2 hover:scale-125" title="Profile">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24" strokeWidth="1.5" stroke="currentColor" className="dark:text-gray-200 w-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
</svg>

                </div>
            <div
          aria-label="Toggle Dark Mode"
          type="button"
          className="p-2 h-10 w-10 lg:transform-none md:relative md:left-0 border-0 hover:my-2 hover:scale-125"
          onClick={handleTheme}
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="text-gray-800 dark:text-gray-200"
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
        <div className="p-2 hover:my-2 hover:scale-125" title="Cart">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30px" height="30px" fill="currentColor" stroke="currentColor" className="text-gray-800 dark:text-gray-200"><path d="M95.2 65l-54.6 8c-1.6.2-2.8 1.8-2.5 3.4.2 1.5 1.5 2.6 3 2.6.1 0 .3 0 .4 0l54.6-8c9.4-1.4 16.8-8.2 19-17.4l6.9-28.8c.2-.9 0-1.8-.6-2.6-.6-.7-1.4-1.1-2.4-1.1H21.5C18.8 8.7 11.3 2 11 1.7 9.7.7 7.8.8 6.8 2 5.7 3.3 5.8 5.2 7 6.2c.1.1 7.2 6.5 9 18.2l8.7 57.5c1 6.4 6.4 11.1 12.9 11.1H97c1.7 0 3-1.3 3-3s-1.3-3-3-3H37.6c-3.5 0-6.4-2.5-6.9-6l-8.2-54h92.7l-6 25.1C107.6 58.9 102.1 64 95.2 65zM31 114c0 7.2 5.8 13 13 13s13-5.8 13-13-5.8-13-13-13S31 106.8 31 114zM51 114c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7S51 110.1 51 114zM87 101c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13S94.2 101 87 101zM87 121c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7S90.9 121 87 121z"/></svg>
        
        </div>
        </aside>
        </div>
        </ThemeContext.Provider> 
        
    )
}