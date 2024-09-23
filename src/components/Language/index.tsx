import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import flagUK from './flagUK.webp'
import flagFR from './flagFR.webp'
import Link from 'next/link';

export default function Language () {
// makes flags appear on hover or click (touchscreen) + change language on click on flag
    return (
        <div className='relative z-50 group/language'>
            <FontAwesomeIcon icon={faLanguage} />
            <div className='absolute hidden group-hover/language:flex flex-col gap-1 dark:invert'>
                <div>
                    <Link href="/fr">
                        <Image 
                            src={(flagFR)}
                            alt="Passer au français"
                            width={20}
                            title='Français'
                        />
                    </Link>
                </div>
                <div>
                    <Link href="/en">
                        <Image 
                            src={(flagUK)}
                            alt="Switch to English"
                            width={20}
                            title='English'
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
} 