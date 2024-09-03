'use client'
import projectList from "./projects.json"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

import { useTranslations } from "next-intl";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Projects from "@/containers/Projects";



export default function Project () {

    const t = useTranslations ('Projects')
    return (
        <div className="grid gap-4 grid-flow-col">
        {
            projectList.map((projectItem) => 
                <div key ={projectItem.id} className="shadow-lg transition-all flex flex-col relative overflow-hidden group" >
                    <div className="">
                        <Image 
                        src={require(`${projectItem.src}`).default}
                        alt="Aperçu du projet"
                        width={800}
                        height={400}
                        className="min-h-72 max-h-72 object-cover object-left-top "
                        />
                    </div>
                    <div className="absolute top-3/4 group-hover:bottom-0 group-hover:top-auto bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 ">
                        <div className="place-content-center">
                            <p className="text-center text-lg p-2">{t(`projectList.${projectItem.id}.title`)}</p>
                        </div>
                        <div className="">
                            <p className="p-2 text-justify"> {t(`projectList.${projectItem.id}.backText`)} </p>
                            <div className="p-2"><Link href={''}>{t('github')}</Link></div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 bg-zinc-200 dark:bg-zinc-800 w-full text-center group-hover:invisible">
                        <FontAwesomeIcon icon={faChevronDown} className="dark:invert"/>
                    </div>
                </div>
            )
        } 
        </div> 
    )
}
