"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';


export default function Footer() {
  const t = useTranslations('Footer')

    return (
      <footer className="bg-stone-800 flex flex-col place-items-center transition-all pt-8">
        <h2 className="text-stone-50 text-xl pb-2">{t('contactme')}</h2>
        <nav className="flex gap-2 ">
          <motion.button whileHover={{
              scale: 1.1 
              }}
              whileTap={{ scale: 0.9 }}
              style={{originY:0.7}}
              >
            <a href="https://www.linkedin.com/in/florianantoine/" target="_blank" rel="noopener noreferrer" className='bg-cyan-700 h-10 aspect-square rounded-md flex place-items-center justify-center'><FontAwesomeIcon icon={faLinkedinIn} className='text-white'/></a>
          </motion.button>
          <motion.button
          whileHover={{
            scale: 1.1 
            }}
            whileTap={{ scale: 0.9 }}
            style={{originY:0.7}}>
            <a href="mailto:florian.antoine.m@gmail.com"  className='bg-cyan-700 h-10 aspect-square rounded-md flex place-items-center justify-center'><FontAwesomeIcon icon={faPaperPlane} className='text-white'/></a>
          </motion.button>
          <motion.button
          whileHover={{
            scale: 1.1 
            }}
            whileTap={{ scale: 0.9 }}
            style={{originY:0.7}}>
            <a href="https://github.com/flotoine/"  target="_blank" rel="noopener noreferrer" className='bg-cyan-700 h-10 aspect-square rounded-md flex place-items-center justify-center'><FontAwesomeIcon icon={faGithub} className='text-white'/></a>
          </motion.button>
        </nav>
        <p className="text-stone-50 text-sm pt-12 p-4">
           {t('rights')}
        </p>
      </footer>
    );
  }