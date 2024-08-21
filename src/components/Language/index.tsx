import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import flagUK from './flagUK.png'
import flagFR from './flagFR.png'

export default function Language () {
    return (
        <div className='relative group/language'>
            <FontAwesomeIcon className='pr-5 ' icon={faLanguage} />
            <div className='absolute group/edit invisible group-hover/language:visible flex flex-col gap-1 dark:invert'>
                <div>
                    <Image 
                        src={(flagFR)}
                        alt="passer au français"
                        width={20}
                    />
                </div>
                <div>
                    <Image 
                        src={(flagUK)}
                        alt="passer à l'anglais"
                        width={20}
                    />
                </div>
            </div>
        </div>
    )
} 