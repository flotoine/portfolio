'use client'
import projectList from "./projects.json"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

import { useTranslations } from "next-intl";


export default function Project () {
/// maps the projects to display them as cards
    const t = useTranslations ('Projects')
    return (
        <section className="flex gap-4 flex-col md:flex-row">
        {
            projectList.map((projectItem) => 
                <section key ={projectItem.id} className="shadow-lg transition-all flex flex-col relative overflow-hidden group/project rounded" >
                    <figure className="">
                        <Image 
                        src={require(`${projectItem.src}`).default}
                        alt="Aperçu du projet"
                        width={800}
                        height={400}
                        className="min-h-72 max-h-72 object-cover object-left-top "
                        />
                    </figure>
                    <section className="px-2 pb-2 absolute w-full top-[80%] text-sm group-hover/project:bottom-0 group-hover/project:top-auto bg-stone-100 dark:bg-stone-700 text-stone-900 dark:text-stone-50 ">
                        <h3 className="line-clamp-1 group-hover/project:line-clamp-none place-content-center p-2 text-center">
                        {t(`projectList.${projectItem.id}.title`)}
                        </h3>
                      
                        <p className="pb-2 text-justify font-light"> {t(`projectList.${projectItem.id}.backText`)} </p>
                        <p>Technologies :</p>
                        <p className="font-light pb-2">{projectItem.techs}</p>
                        <Link href={`${projectItem.link}`}>{t('github')}</Link>
                      
                    </section>
                    <section className="absolute bottom-0 bg-stone-200 dark:bg-stone-800 w-full text-center group-hover/project:invisible">
                        <FontAwesomeIcon icon={faChevronDown} className="dark:invert"/>
                    </section>
                </section>
            )
        } 
        </section> 
    )
}
