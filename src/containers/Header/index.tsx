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

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  const [story, setStory] = useState(false)
  function handleClick() {
    setStory(!story)
  }



    return (
      <div>
        <div className='header-container static flex flex-col place-items-center  bg-zinc-50 dark:bg-zinc-900 '> 
          <div onClick={handleClick} className=" flex flex-col w-[80%] sm:w-2/3 md:w-1/2 font-outline-1 cursor-pointer h-[calc(100dvh-65px)] place-content-center text-zinc-950  dark:text-zinc-50 dark:font-outline-0">
            <h1 className="text-5xl sm:text-5xl md:text-6xl z-10">
                Florian Antoine
            </h1>
            <p className="text-xl sm:text-3xl font-light z-10 pb-4">
              {t('title')}
            </p>
            <div className={story ? "z-10":"hidden"}>{t('story')}</div>
          </div>
          <div className='card z-0 drop-shadow-lg brightness-200 opacity-50 absolute top-[35%] -translate-y-[35%]'> {/* problème alignement sur iphone SE */}
            <Image 
              src={profilePic}
              alt="Photo d'identité de Florian Antoine"
              height={800}
              width={500}
              className={story? "front blur-md w-[50dvw] md:w-[500px]":"front w-[70dvw] md:w-[500px]"}
            />
          </div>
        </div>
        <div className='absolute top-5 right-5 flex flex-row text-xl sm:text-lg place-items-center dark:invert'>
            <Language />
            <button>
              <FontAwesomeIcon icon={faMoon} onClick={toggleTheme} />
            </button>
        </div>
      </div>
    );
  }