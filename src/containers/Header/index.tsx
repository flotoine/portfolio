import Image from 'next/image'
import profilePic from './BackgroundPP.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faMoon } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    return (
      <div> 
        <div className="flex flex-col font-outline-1 h-[93dvh] place-items-center place-content-center bg-zinc-50 text-zinc-950">
          <h1 className="text-8xl z-10">
              Florian Antoine
          </h1>
          <div className='absolute object-center z-0 drop-shadow-lg brightness-200 opacity-50 p-40'>
            <Image 
              src={profilePic}
              alt="Photo d'identité de Florian Antoine"
              width={600}
              height={800}
            />
          </div>
          <p className="text-5xl z-10">
              Développeur Front et Back
          </p>
          <div className='absolute top-5 right-5'>
            <FontAwesomeIcon className='pr-5' icon={faLanguage} />
            <FontAwesomeIcon icon={faMoon} />
          </div>
        </div>
      </div>
    );
  }