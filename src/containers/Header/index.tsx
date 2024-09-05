'use client';
import Image from 'next/image'
import profilePic from './BackgroundPP.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Language from "../../components/Language"

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



    return (
      <div className='header-container static flex flex-col place-items-center  bg-zinc-50 dark:bg-zinc-900'> 
        <div className=" flex flex-col font-outline-1  h-[calc(100dvh-65px)] place-content-center   transition-all text-zinc-950  dark:text-zinc-50 dark:font-outline-0">
          <h1 className="text-8xl z-10">
              Florian Antoine
          </h1>
          <p className="text-[57px] font-light z-10 ">
            {t('title')}
          </p>
        </div>
        <div className='z-0 drop-shadow-lg brightness-200 opacity-50 absolute top-10 '>
          <Image 
            src={profilePic}
            alt="Photo d'identité de Florian Antoine"
            width={600}
            height={800}
            className='PP'
          />
        </div>
        <div className='absolute top-5 right-5 flex flex-row place-items-center dark:invert'>
          <Language />
          <FontAwesomeIcon icon={faMoon} onClick={toggleTheme} />
        </div>
        
      </div>
    );
  }