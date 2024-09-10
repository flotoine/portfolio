"use client"
import EmblaCarousel from "@/components/Carousel/js/index";
import { useTranslations } from "next-intl";

import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import BackgroundCard from "@/components/BackgroundCard";

export default function Skills() {
  const t = useTranslations('Skills')
  const [showCV, setShowCV] = useState(false);
  function toggle(){
    setShowCV(!showCV);
  }


    return (
      <div className="bg-zinc-200 px-8 py-4 dark:bg-zinc-700 transition-all">
        <h2 className="text-zinc-900 text-3xl pb-4 dark:text-zinc-50">{t('title')}</h2>
        <div>
          Après avoir fait carrière dans le milieu brassicole pendant près de 8 ans, je décide de me reconvertir pour devenir développeur web.
        </div>
        <div>
          J&apos;ai adoré résoudre des problèmes dans mon domaine prédédent et aider les autres, mes collègues, mes clients à trouver des solutions.
        </div>
        <div>
          Aujourd&apos;hui, j&apos;ai envie de revenir aux nouvelles technologies, passion que j&apos;ai depuis tout petit et d&apos;y allier ce même sens du service.
        </div>
        <div className="flex gap-2 justify-between">  
          <div className="flex flex-col bg-zinc-300 dark:bg-zinc-800 text-center w-2/3">
            <h3 className="text-zinc-900 dark:text-zinc-50 text-xl font-light py-4">{t('techs')}</h3>
            <EmblaCarousel/>
          </div>
          <div className="bg-zinc-300 w-1/3 dark:bg-zinc-800">
            <h3 className="text-zinc-900 dark:text-zinc-50 text-xl text-center font-light py-4">{t('otherskills')}</h3>
            <div className="grid grid-cols-[18px_auto] gap-x-2 gap-y-1 p-2 items-center text-zinc-900 dark:text-zinc-50">
              <Image src="/assets/skillLogos/html.png" alt="logo HTML" height={30} width={30} />
              <div>HTML</div>
              <Image src="/assets/skillLogos/css.png" alt="logo HTML" height={30} width={30}/>
              <div>CSS/Sass</div>
              <Image src="/assets/skillLogos/Typescript.svg" alt="logo HTML" height={30} width={30} />
              <div>Javascript/Typescript</div>
              <Image src="/assets/skillLogos/React.svg" alt="logo HTML" height={30} width={30} />
              <div>React</div>
              <div>↔️</div>
              <div>API REST</div>
              <div>🚀</div>
              <div>Agile</div>
              <div>🗣️</div>
              <div>{t('webaccess')}</div>
              <div>🔍</div>
              <div>SEO</div>
              <div>📈</div>
              <div>{t('perf')}</div>
            </div>
          </div>
        </div>  
        <div className="text-center flex flex-col items-center pt-8 pb-4">
          <button onClick={toggle} className="text-zinc-900 dark:text-zinc-50 text-xl max-w-fit">{t('CV')}</button> 
          <FontAwesomeIcon onClick={toggle} icon={faChevronDown} className="dark:invert max-w-fit"/>
          <div style={{
             display: showCV?"block":"none"
            }}>
            <BackgroundCard />
            <div>{t('dlCV')}</div>
          </div>
        </div>
      </div>
    );
  }