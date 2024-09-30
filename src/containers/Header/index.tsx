'use client';
import Image from 'next/image'
import profilePic from './BackgroundPP.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Language from "../../components/Language"
import { useState } from 'react';

import { useTranslations } from 'next-intl';

import './PP.css'



export default function Header() {

  const t = useTranslations('Header')
// write dark in classlist for tailwind dark mode recognition 
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
/// set a state for backstory to appear and modify the background 
  const [story, setStory] = useState(false)
  function handleClick() {
    setStory(!story)
  }



    return (
      <header>
        <section className='header-container static flex flex-col place-items-center  bg-stone-100 dark:bg-stone-900 antialiased'> 
          
          
          <section onClick={handleClick} className={story?"flex flex-col w-[80%] sm:w-2/3 md:w-1/2 font-outline-1 cursor-pointer h-[calc(100dvh-65px)] place-content-center text-stone-800  dark:text-stone-300 dark:font-outline-thin-dark transition-all":"flex flex-col w-[80%] sm:w-2/3 md:w-1/2 font-outline-1 cursor-pointer h-[calc(100dvh-65px)] place-content-center text-stone-800  dark:text-stone-300 dark:font-outline-thin-dark hover:pb-5 transition-all"}>
            <h1 className="text-5xl sm:text-5xl md:text-6xl z-10">
                Florian Antoine
            </h1>
            <p className="text-xl sm:text-3xl font-light z-10 pb-4">
              {t('title')}
            </p>
            <p className={story ? "z-10 font-light text-xl font-outline-thin dark:font-outline-thin-dark dark:font-normal":"hidden"}>{t('story')}</p>
          </section>
          <figure className={story? "blur-md card z-0 drop-shadow-2xl brightness-200 dark:brightness-100 opacity-50 absolute top-[35%] -translate-y-[35%]":"card z-0 drop-shadow-2xl brightness-200 dark:brightness-100 opacity-50 absolute top-[35%] -translate-y-[35%]"}>
            <Image 
              src={profilePic}
              alt="Photo d'identité de Florian Antoine"
              height={800}
              width={500}
              className={story? "front w-[50dvw] md:w-[400px]":"front w-[70dvw] md:w-[500px]"}
            />
          </figure>
        </section>
        <nav className='absolute top-5 right-5 gap-5 pr-1 flex flex-row text-xl sm:text-lg place-items-center dark:invert'>   
            <Language />    
            <button name='button' title="Dark mode">
              <FontAwesomeIcon icon={faMoon} onClick={toggleTheme}/>
            </button>
        </nav>
      </header>
    );
  }