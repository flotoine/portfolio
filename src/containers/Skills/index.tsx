"use client"
import EmblaCarousel from "@/components/Carousel/js/index";
import { useTranslations } from "next-intl";

import { useState } from "react";
import { motion } from "framer-motion"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import BackgroundCard from "@/components/BackgroundCard";

export default function Skills() {
  const t = useTranslations('Skills')

  /// set a state to show full resume grid or nor
  const [showCV, setShowCV] = useState(false);
  function toggle(){
    setShowCV(!showCV);
  }

  // for arrow to rotate when state changes
  const variants = {
    closed: { },
    open: { rotate:180 },
  }
  


    return (
      <div className="bg-stone-300 px-8 py-4 dark:bg-stone-700 ">
        <h2 className="text-stone-900 text-3xl pb-4 dark:text-stone-100">{t('title')}</h2>
        <div className="flex gap-4 justify-between flex-col md:flex-row">  
          <section className="flex flex-col backdrop-brightness-90 text-center rounded shadow-lg">
            <h3 className="text-stone-900 dark:text-stone-100 text-xl font-light py-4">{t('techs')}</h3>
            <EmblaCarousel/>
          </section>
          <section className="backdrop-brightness-90 flex-grow rounded shadow-lg">
            <h3 className="text-stone-900 dark:text-stone-100 text-xl text-center font-light py-4">{t('otherskills')}</h3>
            <div className="grid grid-cols-[18px_auto] gap-x-2 gap-y-1 p-2 items-center text-stone-900 dark:text-stone-100">
              <Image src="/assets/skillLogos/html.png" alt="logo HTML" height={30} width={30} />
              <div>HTML</div>
              <Image src="/assets/skillLogos/css.png" alt="logo HTML" height={30} width={30}/>
              <div>CSS/Sass</div>
              <Image src="/assets/skillLogos/Typescript.svg" alt="logo HTML" height={30} width={30} />
              <div>Javascript/Typescript</div>
              <Image src="/assets/skillLogos/React.svg" alt="logo HTML" height={30} width={30} />
              <div>React</div>
              <div>↔️</div>
              <div>Express/API REST</div>
              <div>🚀</div>
              <div>Agile</div>
              <div>🗣️</div>
              <div>{t('webaccess')}</div> 
              {/*fusion SEO/access */}
              <div>🔍</div>
              <div>SEO</div>
              <div>📈</div>
              <div>{t('perf')}</div>
            </div>
          </section>
        </div>  
        <div className="text-center flex flex-col items-center pt-8 pb-4 transition-all">
          <button onClick={toggle} className="text-stone-900 dark:text-stone-100 text-xl max-w-fit flex flex-col place-items-center">
            {t('CV')}
            {/*arrow effects*/}
            <motion.div whileHover={{
              scale: 1.2 
              }}
              whileTap={{ scale: 0.9 }}
              animate={showCV ? "open" : "closed"}
              variants={variants}
              style={{originY:0.7}}
              >
              <div className="text-stone-900 dark:text-slate-100">
                <FontAwesomeIcon onClick={toggle} icon={faChevronDown} className="max-w-fit pt-4"/>
              </div>
            </motion.div>
          </button> 
          {/*résumé visibility*/}
          <div style={{
             display: showCV?"block":"none"
            }}>
            <BackgroundCard />
            <a href='assets/CV_Florian_Antoine.pdf' download>{t('dlCV')}</a>
          </div>
        </div>
      </div>
    );
  }