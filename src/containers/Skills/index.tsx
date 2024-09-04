"use client"
import EmblaCarousel from "@/components/Carousel/js/index";
import { useTranslations } from "next-intl";

import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
  const t = useTranslations('Skills')
  const [showCV, setShowCV] = useState(false);
  function toggle(){
    setShowCV(!showCV);
    console.log(showCV)
  }
  
    return (
      <div className="bg-zinc-200 p-4 dark:bg-zinc-700 transition-all">
        <h2 className="text-zinc-900 text-3xl pb-4 dark:text-zinc-50">{t('title')}</h2>
        <h3 className="text-zinc-900 dark:text-zinc-50 text-xl">Technologies de prédilection</h3>
        <EmblaCarousel />
        <h3 className="text-zinc-900 dark:text-zinc-50 text-xl">Autres compétences</h3>
        <ul>
          <li>Accessibilité du web</li>
          <li>SEO</li>
          <li>Optimisation des performances</li>
        </ul>
        <div className="text-center flex flex-col items-center">
          <button onClick={toggle} className="text-zinc-900 dark:text-zinc-50 text-xl max-w-fit">Ouvrir le CV</button> 
          <FontAwesomeIcon onClick={toggle} icon={faChevronDown} className="dark:invert max-w-fit"/>
          <div style={{
             display: showCV?"block":"none"
            }}>
            <ul>
              <li>2019-2024 Technico</li>
              <li>2018-2019 Formateur</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }