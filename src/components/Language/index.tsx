import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import flagUK from './flagUK.webp'
import flagFR from './flagFR.webp'
import Link from 'next/link';
import { motion } from 'framer-motion'

export default function Language () {

    return (
        <div className='relative z-50 group/language'>
            <FontAwesomeIcon className='pr-5' icon={faLanguage} />
            <div className='absolute hidden group-hover/language:flex flex-col gap-1 dark:invert'>
                <div>
                    <Link href="/fr">
                        <Image 
                            src={(flagFR)}
                            alt="passer au français"
                            width={20}
                        />
                    </Link>
                </div>
                <div>
                    <Link href="/en">
                        <Image 
                            src={(flagUK)}
                            alt="passer à l'anglais"
                            width={20}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
} 