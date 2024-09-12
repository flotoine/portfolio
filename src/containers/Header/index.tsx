'use client';
import Image from 'next/image'
import profilePic from './BackgroundPP.webp'
import BackPP from './BackgroundPPback.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Language from "../../components/Language"
import { useState } from 'react';

import { useTranslations } from 'next-intl';

import './PP.css'
import { Html } from 'next/document';


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

  const [background, setBackground] = useState(false)
  function handleClick() {
    setBackground(!background)
    console.log(background)
  }




    return (
      <div>
        <div className='header-container static flex flex-col place-items-center  bg-zinc-50 dark:bg-zinc-900 '> 
          <div onClick={handleClick} className=" flex flex-col w-1/2 font-outline-1  h-[calc(100dvh-65px)] place-content-center   transition-all text-zinc-950  dark:text-zinc-50 dark:font-outline-0">
            <h1 className="text-8xl z-10">
                Florian Antoine
            </h1>
            <div>{background?"Après avoir fait carrière dans le milieu brassicole pendant près de 8 ans, je décide de me reconvertir pour devenir développeur web. J'ai adoré résoudre des problèmes dans mon domaine prédédent et aider les autres, mes collègues, mes clients à trouver des solutions. Aujourd'hui, j'ai envie de revenir aux nouvelles technologies, passion que j'ai depuis tout petit et d'y allier ce même sens du service.":""}</div>
            <p className="text-[57px] font-light z-10 ">
              {t('title')}
            </p>
          </div>
          <div className='card z-0 drop-shadow-lg brightness-200 opacity-50 absolute top-10'>
            <div className={background?'activeFront':""}>
              <Image 
                src={profilePic}
                alt="Photo d'identité de Florian Antoine"
                width={600}
                height={800}
                className='front'
              />
            </div>
            <div className={background?'activeBack':""}>
              <Image 
                src={BackPP}
                alt="Recto de la Photo d'identité de Florian Antoine"
                width={600}
                height={800}
                className='back'
              />
            </div>
          </div>
          
          
        </div>
        <div className='absolute top-5 right-5 flex flex-row place-items-center dark:invert'>
            <Language />
            <FontAwesomeIcon icon={faMoon} onClick={toggleTheme} />
        </div>
      </div>
    );
  }