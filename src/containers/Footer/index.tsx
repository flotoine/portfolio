"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer')
    return (
      <div className="bg-zinc-800 flex flex-col place-items-center transition-all pt-8">
        <p className="text-zinc-50 text-xl pb-2">{t('contactme')}</p>
        <div className="flex gap-2 ">
          <a href="https://www.linkedin.com" className='bg-cyan-700 h-10 aspect-square rounded-md flex place-items-center justify-center'><FontAwesomeIcon icon={faLinkedinIn} className='text-white'/></a>
          <a href="mailto:me@me.com"  className='bg-cyan-700 h-10 aspect-square rounded-md flex place-items-center justify-center'><FontAwesomeIcon icon={faPaperPlane} className='text-white'/></a>
          <a href="https://www.github.com"  className='bg-cyan-700 h-10 aspect-square rounded-md flex place-items-center justify-center'><FontAwesomeIcon icon={faGithub} className='text-white'/></a>
        </div>
        <div className="text-zinc-50 text-sm pt-12 p-4">Mentions Légales</div>
      </div>
    );
  }